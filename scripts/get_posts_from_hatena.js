const fs = require('fs');
const axios = require('axios');
const parseString = require('xml2js').parseString;

const HATENA_API_USER = process.env.HATENA_API_USER;
const HATENA_API_PASSWORD = process.env.HATENA_API_PASSWORD;

const creds = `${HATENA_API_USER}:${HATENA_API_PASSWORD}`;
const encoded = Buffer.from(creds).toString('base64');
const authorizationHeader = `Basic ${encoded}`;

function wait(msec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, msec);
  });
}

function parseStringPromise(data) {
  return new Promise((resolve, reject) => {
    parseString(data, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

async function getAllEntries(url) {
  console.log('fetching:', url);
  const entries = await axios.get(url, {
    headers: {
      Authorization: authorizationHeader
    }
  });

  const {
    feed: { entry, link }
  } = await parseStringPromise(entries.data);

  const next = link.find(l => l.$.rel === 'next');

  const parsedEntries = entry
    .filter(e => {
      const {
        'app:control': [
          {
            'app:draft': [isDraft]
          }
        ]
      } = e;
      return !(isDraft === 'yes');
    })
    .map(e => {
      const categories = e.category ? e.category : [];

      return {
        type: 'blog',
        objectID: e.id[0],
        title: e.title[0],
        url: e.link[1].$.href,
        published: e.published[0],
        publishedAt: new Date(e.published[0]).getTime(),
        updated: e.updated[0],
        updatedAt: new Date(e.updated[0]).getTime(),
        summary: e.summary[0]._,
        tags: categories.map(c => c.$.term)
      };
    });

  if (next) {
    const nextHref = next.$.href;
    await wait(500);
    const nextEntries = await getAllEntries(nextHref);
    return [...parsedEntries, ...nextEntries];
  } else {
    return parsedEntries;
  }
}

const requestUrl = `https://blog.hatena.ne.jp/kenev/kenfdev.hateblo.jp/atom/entry`;
getAllEntries(requestUrl).then(results => {
  fs.writeFile(
    '../resources/hatena.json',
    JSON.stringify(results),
    'utf8',
    err => {
      if (err) {
        console.error(err);
      }
      console.log('done');
    }
  );
});
