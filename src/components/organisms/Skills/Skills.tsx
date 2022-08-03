import { FC } from 'react';
import { styled } from '../../../styles/stitches';
import { Box } from '../../general/Box';
import SectionTitle from '../../general/SectionTitle/SectionTitle';
import { LevelDescriptions } from './LevelDescriptions';
import Section from '../../general/Section/Section';
import { Skill, SkillData } from '../../dataDisplay/Skill';

export interface LevelDescription {
  level: number;
  description: string;
}
export interface SkillsData {
  language: SkillData[];
  frontendFramework: SkillData[];
  backendFramework: SkillData[];
  test: SkillData[];
  database: SkillData[];
  infrastructure: SkillData[];
}

interface DisplaySkill {
  name: string;
  data: SkillData[];
}

interface Props {
  className?: string;
  levelDescriptions: LevelDescription[];
  skills: SkillsData;
}

export const Skills: FC<Props> = ({ className, levelDescriptions, skills }) => {
  const displaySkills: DisplaySkill[] = [
    { name: 'Language', data: skills.language },
    { name: 'Front-end Frameworks', data: skills.frontendFramework },
    { name: 'Back-end Frameworks', data: skills.backendFramework },
    { name: 'Testing', data: skills.test },
    { name: 'Databases', data: skills.database },
    { name: 'Infrastructure', data: skills.infrastructure },
  ];

  return (
    <Section className={className}>
      <SectionTitle css={{ textAlign: 'center' }}>Skills</SectionTitle>
      <Container>
        {displaySkills.map((v) => (
          <Box css={{ p: '1rem 0' }} key={v.name}>
            <Skill name={v.name} data={v.data} />
          </Box>
        ))}
      </Container>
      <Box css={{ textAlign: 'right' }}>
        <LevelDescriptions data={levelDescriptions} />
      </Box>
    </Section>
  );
};

const Container = styled('div', {
  display: 'grid',
  width: '100%',
  '@bp2': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@bp3': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});
