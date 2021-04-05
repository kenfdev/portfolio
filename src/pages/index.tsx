import React, { FunctionComponent } from 'react';
import { PageProps } from 'gatsby';
import { Home } from '../components/templates/Home';
import { graphql } from 'gatsby';

interface OwnProps {
  data: any;
}

type Props = OwnProps & PageProps;

const IndexRoute: FunctionComponent<Props> = ({ data }) => {
  return <Home data={data.allSkillsYaml.nodes[0]} />;
};

export const query = graphql`
  {
    allSkillsYaml {
      nodes {
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
`;

export default IndexRoute;
