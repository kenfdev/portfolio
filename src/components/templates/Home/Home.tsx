import React, { FunctionComponent, useEffect, useState } from 'react';
import { DefaultLayout } from '../DefaultLayout';
import { TopProfile } from '../../organisms/TopProfile';
import { About } from '../../organisms/About';
import { Skills } from '../../organisms/Skills';
import styled from 'styled-components';

interface Props {
  data: any;
}

function calcSkillsPerRow() {
  let skillsPerRow = 3;
  const width = window.innerWidth;
  if (width < 550) {
    skillsPerRow = 1;
  } else if (width < 769) {
    skillsPerRow = 2;
  }
  return skillsPerRow;
}

export const Home: FunctionComponent<Props> = ({ data }) => {
  const initSkillsPerRow = calcSkillsPerRow();
  const [skillsPerRow, setSkillsPerRow] = useState<number>(initSkillsPerRow);

  useEffect(() => {
    function handleResize() {
      const perRow = calcSkillsPerRow();
      setSkillsPerRow(perRow);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <DefaultLayout>
      <TopProfileWrapper>
        <TopProfile />
      </TopProfileWrapper>
      <About />
      <SkillsWrapper>
        <FlexedSkills skillsPerRow={skillsPerRow} data={data} />
      </SkillsWrapper>
    </DefaultLayout>
  );
};

const TopProfileWrapper = styled.div`
  padding: 2rem 0 2rem 0;
  text-align: center;
  box-shadow: 0 0.02rem 0.25rem 0 rgb(0 0 0 / 10%);
`;

const FlexedSkills = styled(Skills)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const SkillsWrapper = styled.div``;
