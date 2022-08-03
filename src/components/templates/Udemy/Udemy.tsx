import { FunctionComponent } from 'react';
import { DefaultLayout } from '../DefaultLayout';
import { UdemyCourseList, CourseData } from '../../organisms/UdemyCourseList';
import SectionTitle from '../../shared/SectionTitle';
import { styled } from '../../../styles/stitches';

interface Props {
  location: Location;
  description: string;
  courses: CourseData[];
}

export const Udemy: FunctionComponent<Props> = ({
  location,
  description,
  courses,
}) => {
  return (
    <DefaultLayout location={location}>
      <Wrapper>
        <SectionTitle>Courses</SectionTitle>
        <section>{description}</section>
        <UdemyCourseList courses={courses} />
      </Wrapper>
    </DefaultLayout>
  );
};

const Wrapper = styled('div', {
  margin: '0 auto',
  padding: '1rem 1rem 0 1rem',
  maxWidth: '50rem',
});
