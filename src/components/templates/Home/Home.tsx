import React, { FunctionComponent, useEffect, useState } from 'react';
import { DefaultLayout } from '../DefaultLayout';
import { TopProfile } from '../../organisms/TopProfile';
import { About, Sns } from '../../organisms/About';
import { Skills, SkillsData } from '../../organisms/Skills';
import styled from 'styled-components';
interface Props {
  location: Location;
  about: string;
  skills: SkillsData;
  sns: Sns;
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

export const Home: FunctionComponent<Props> = ({
  location,
  about,
  skills,
  sns,
}) => {
  const [hasRan, setHasRan] = useState(false);
  const [skillsPerRow, setSkillsPerRow] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      const perRow = calcSkillsPerRow();
      setSkillsPerRow(perRow);
    }

    if (!hasRan) {
      setHasRan(true);
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <DefaultLayout location={location}>
      <TopProfileWrapper>
        <TopProfile />
      </TopProfileWrapper>
      <AboutWrapper>
        <About content={about} sns={sns} />
      </AboutWrapper>
      <SkillsWrapper>
        <Skills skillsPerRow={skillsPerRow} data={skills} />
      </SkillsWrapper>
    </DefaultLayout>
  );
};

const DivWithBoxShadow = styled.div``;

const TopProfileWrapper = styled(DivWithBoxShadow)`
  padding: 2rem 0;
  text-align: center;
`;

const AboutWrapper = styled(DivWithBoxShadow)`
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: 50rem;
`;

const SkillsWrapper = styled.div`
  margin: 1rem 0;
`;
