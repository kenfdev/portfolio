import { FC } from 'react';
import { PageProps } from 'gatsby';
import { Home } from '../components/templates/Home';
import { graphql } from 'gatsby';
import Layout from '../layout';

interface OwnProps {
  data: any;
}

type Props = OwnProps & PageProps;

const IndexRoute: FC<Props> = ({ location, data }) => {
  const { allSkillsYaml, allBasicsYaml } = data;
  const [basics] = allBasicsYaml.nodes;
  const [skills] = allSkillsYaml.nodes;
  return (
    <Layout>
      <Home
        location={location}
        about={basics.about}
        levelDescriptions={skills.levelDescriptions}
        skills={skills.skills}
        sns={basics.sns}
      />
    </Layout>
  );
};

export const query = graphql`
  {
    allSkillsYaml {
      nodes {
        levelDescriptions {
          level
          description
        }
        skills {
          backendFramework {
            name
            level
          }
          frontendFramework {
            level
            name
          }
          database {
            level
            name
          }
          infrastructure {
            level
            name
          }
          language {
            level
            name
          }
          test {
            level
            name
          }
        }
      }
    }
    allBasicsYaml {
      nodes {
        about
        sns {
          twitter
          github
          facebook
          linkedin
        }
      }
    }
  }
`;

export default IndexRoute;
