import React, { FunctionComponent } from 'react';
import { PageProps } from 'gatsby';
import { Experiences } from '../components/templates/Experiences';
import { graphql } from 'gatsby';
import Layout from '../layout';
import styled from 'styled-components';

interface OwnProps {
  data: any;
}

type Props = OwnProps & PageProps;

const IndexRoute: FunctionComponent<Props> = ({ location, data }) => {
  const { allExperiencesYaml } = data;
  const [experiences] = allExperiencesYaml.nodes;
  return (
    <Layout>
      <Experiences location={location} experiences={experiences.experiences} />
    </Layout>
  );
};

export const query = graphql`
  {
    allExperiencesYaml(sort: { fields: experiences___from, order: DESC }) {
      nodes {
        experiences {
          description
          from
          membersCount
          projectName
          role
          skills
          to
        }
      }
    }
  }
`;

export default IndexRoute;