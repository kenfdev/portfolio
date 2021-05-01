import React, { FunctionComponent } from 'react';
import { LevelDescription } from './Skills';
import styled from 'styled-components';

type Prop = {
  className?: string;
  data: LevelDescription[];
};

export const LevelDescriptions: FunctionComponent<Prop> = ({
  data,
  className,
}) => {
  const renderLevelDescriptions = () => {
    return data.map((v) => (
      <li>
        {v.level}: {v.description}
      </li>
    ));
  };
  return (
    <Wrapper className={className}>
      <Descriptions>{renderLevelDescriptions()}</Descriptions>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.8rem;
`;

const Descriptions = styled.ul`
  li {
    display: inline-block;
    margin-right: 0.5rem;
  }
`;
