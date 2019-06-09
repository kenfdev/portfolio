const algoliasearch = require('algoliasearch');

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX = process.env.ALGOLIA_INDEX;
const API_USER = process.env.API_USER;
const API_PASSWORD = process.env.API_PASSWORD;

exports.handler = (event, context, callback) => {
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
  const index = client.initIndex(ALGOLIA_INDEX);

  const { headers, isBase64Encoded, body, httpMethod } = event;

  if (httpMethod !== 'POST') {
    callback(new Error('Bad Request'));
    return;
  }

  if (headers.authorization) {
    const encodedCreds = headers.authorization.split(' ')[1];
    const [user, password] = Buffer.from(encodedCreds, 'base64')
      .toString('ascii')
      .split(':');
    console.log('creds:', user, password);
    console.log('creds:', API_USER, API_PASSWORD);
    const credValid = user === API_USER && password === API_PASSWORD;
    if (!credValid) {
      callback(new Error('Bad Request'));
      return;
    }
  }

  let data = null;
  let jsonString = '';
  if (isBase64Encoded) {
    jsonString = Buffer.from(body, 'base64').toString('ascii');
  } else {
    jsonString = body;
  }
  data = JSON.parse(jsonString);

  const publishedAt = new Date(data.published).getTime();
  const id = `${data.type}_${publishedAt}`;
  const objects = [{ ...data, objectID: id, publishedAt }];

  index.addObjects(objects, () => {
    callback(null, {
      statusCode: 200
    });
  });
};
