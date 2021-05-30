import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

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

export const UdemyCourseList: FunctionComponent<Props> = ({ courses }) => (
  <div>
    {courses.map((data, idx) => (
      <Wrapper key={idx}>
        <LinkItem href={data.couponUrl} target="_blank">
          <ThumbnailWrapper>
            <img src={data.thumbnail} alt={data.thumbnailAlt} />
          </ThumbnailWrapper>
          <ContentWrapper>
            <div className="course-title">{data.courseName}</div>
            <p>{data.description}</p>
          </ContentWrapper>
        </LinkItem>
      </Wrapper>
    ))}
  </div>
);

const Wrapper = styled.div`
  padding: 2rem 0.5rem;
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #e5e5e5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const LinkItem = styled.a`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ThumbnailWrapper = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    max-width: 300px;
    margin: auto;
  }
`;

const ContentWrapper = styled.div`
  flex: 3;
  padding: 0 1rem;

  .course-title {
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
