import { FC } from 'react';
import { PageProps } from 'gatsby';
import { Udemy } from '../components/templates/Udemy';
import { graphql } from 'gatsby';
import Layout from '../layout';

interface OwnProps {
  data: any;
}

type Props = OwnProps & PageProps;

const CoursesRoute: FC<Props> = ({ location, data }) => {
  const { allCoursesYaml } = data;
  const [courses] = allCoursesYaml.nodes;
  return (
    <Layout>
      <Udemy
        location={location}
        description={courses.description}
        courses={courses.courses}
      />
    </Layout>
  );
};

export const query = graphql`
  {
    allCoursesYaml {
      nodes {
        description
        courses {
          couponUrl
          courseName
          description
          thumbnail
          thumbnailAlt
        }
      }
    }
  }
`;

export default CoursesRoute;
