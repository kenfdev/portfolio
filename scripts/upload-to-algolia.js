const fs = require('fs');
const glob = require('glob');
const algoliasearch = require('algoliasearch');

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX = process.env.ALGOLIA_INDEX;

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX);

// options is optional

glob('../resources/*.json', undefined, function(er, files) {
  const objects = files.reduce((agg, file) => {
    const json = fs.readFileSync(file, 'utf8');
    const objects = JSON.parse(json);
    return [...agg, ...objects];
  }, []);

  index.addObjects(objects, () => {
    console.log('done');
  });
});
