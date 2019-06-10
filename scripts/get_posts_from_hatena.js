const fs = require('fs');
const axios = require('axios');
const parseString = require('xml2js').parseString;

const HATENA_API_USER = process.env.HATENA_API_USER;
const HATENA_API_PASSWORD = process.env.HATENA_API_PASSWORD;

const creds = `${HATENA_API_USER}:${HATENA_API_PASSWORD}`;
const encoded = Buffer.from(creds).toString('base64');
const authorizationHeader = `Basic ${encoded}`;

async function getAllEntries(url) {
  console.log('fetching:', url);
  const entries = await axios.get(url, {
    headers: {
      Authorization: authorizationHeader
    }
  });

  return new Promise((resolve, reject) => {
    parseString(entries.data, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      const { entry, link } = result.feed;
      const next = link.find(l => l.$.rel === 'next');
      const parsedEntries = entry.map(e => {
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
          tags: e.category.map(c => c.$.term)
        };
      });

      if (next) {
        const nextHref = next.$.href;
        setTimeout(async () => {
          const nextEntries = await getAllEntries(nextHref);
          resolve([...parsedEntries, ...nextEntries]);
        }, 500);
      } else {
        resolve([]);
      }
    });
  });
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
