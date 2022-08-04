import { FC } from 'react';
import { styled } from '../../../styles/stitches';
import { Box } from '../../general/Box';
import { H3 } from '../../general/Text';

export type CourseData = {
  courseName: string;
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
  couponUrl: string;
};

type Props = {
  courses: CourseData[];
};

export const UdemyCourseList: FC<Props> = ({ courses }) => (
  <div>
    {courses.map((data, idx) => (
      <Wrapper key={idx}>
        <LinkItem href={data.couponUrl} target="_blank">
          <Box css={{ m: 'auto', maxWidth: '300px', flex: 1 }}>
            <img src={data.thumbnail} alt={data.thumbnailAlt} />
          </Box>
          <Box css={{ flex: 3, padding: '0 1rem' }}>
            <H3>{data.courseName}</H3>
            <p>{data.description}</p>
          </Box>
        </LinkItem>
      </Wrapper>
    ))}
  </div>
);

const Wrapper = styled('div', {
  padding: '2rem 0.5rem',
  borderBottom: '1px solid #e5e5e5',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    backgroundColor: '#e5e5e5',
  },
});

const LinkItem = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  '@bp2': {
    flexDirection: 'row',
  },
});
