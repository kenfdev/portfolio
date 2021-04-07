import React, { FunctionComponent } from 'react';
import { Experience, ExperienceData } from './Experience';
import styled from 'styled-components';

type Props = {
  experiences: ExperienceData[];
};

export const ExperiencesList: FunctionComponent<Props> = ({ experiences }) => (
  <div>
    {experiences.map((data, idx) => (
      <Wrapper key={idx}>
        <Experience data={data} />
      </Wrapper>
    ))}
  </div>
);

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;
