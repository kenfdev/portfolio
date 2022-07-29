import React, { FunctionComponent } from 'react';
import { Tag } from '../../atoms/Tag';
import styled from 'styled-components';

export type ExperienceData = {
  projectName: string;
  description: string;
  membersCount: number;
  role: string;
  skills: string[];
  from: Date;
  to: Date;
};

type Props = {
  data: ExperienceData;
};

export const Experience: FunctionComponent<Props> = ({ data }) => (
  <Wrapper>
    <h3>{data.projectName}</h3>
    <Header>
      <div>
        <div>Role: {data.role}</div>
        <div>Members: {data.membersCount}</div>
      </div>
      <div>{`${data.from} - ${data.to}`}</div>
    </Header>
    <Description>{data.description}</Description>
    <SkillsWrapper>Skills:</SkillsWrapper>
    <TagsWrapper>
      {data.skills.map((v, idx) => {
        return (
          <li key={idx}>
            <Tag>{v}</Tag>
          </li>
        );
      })}
    </TagsWrapper>
  </Wrapper>
);
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const SkillsWrapper = styled.div`
  margin-bottom: 0.3rem;
`;

const TagsWrapper = styled.ul`
  li {
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.7rem;
  }
`;
