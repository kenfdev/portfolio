const fs = require('fs');
const { GraphQLClient } = require('graphql-request');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPOSITORIES = process.env.GITHUB_REPOSITORIES;

const repositories = GITHUB_REPOSITORIES.split(',');

async function run() {
  const endpoint = 'https://api.github.com/graphql';

  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`
    }
  });

  const promises = repositories.map(repo => {
    const query = /* GraphQL */ `
    {
      repository(owner: "${GITHUB_OWNER}", name: "${repo}") {
        name
        stargazers {
          totalCount
        }
        forkCount
        primaryLanguage {
          name
        }
        url
        description
      }
    }
  `;

    return client.request(query).then(result => {
      const {
        name: title,
        stargazers: { totalCount: stars },
        forkCount: forks,
        primaryLanguage: { name: language },
        url,
        description
      } = result.repository;
      return {
        type: 'repository',
        title,
        url,
        description,
        stats: {
          language,
          stars,
          forks
        }
      };
    });
    // console.log(JSON.stringify(data, undefined, 2));
  });

  const results = await Promise.all(promises);
  return results;
}

run()
  .then(results => {
    fs.writeFile(
      '../resources/repositories.json',
      JSON.stringify(results),
      'utf8',
      err => {
        if (err) {
          console.error(err);
        }
        console.log('done');
      }
    );
  })
  .catch(error => console.error(error));
