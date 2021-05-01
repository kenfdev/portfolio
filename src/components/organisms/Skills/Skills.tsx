import React, { FunctionComponent } from 'react';
import { Skill, SkillData } from '../../molecules/Skill';
import styled from 'styled-components';
import Section from '../../shared/Section';
import SectionTitle from '../../shared/SectionTitle';
import { LevelDescriptions } from './LevelDescriptions';

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

interface Props {
  className?: string;
  levelDescriptions: LevelDescription[];
  skills: SkillsData;
  skillsPerRow: number;
}

export const Skills: FunctionComponent<Props> = ({
  className,
  levelDescriptions,
  skills,
  skillsPerRow,
}) => {
  const flexBasis = `${100.0 / skillsPerRow}%`;
  return (
    <Section className={className}>
      <CenteredSectionTitle>Skills</CenteredSectionTitle>
      <Container>
        <FlexSkill flexBasis={flexBasis}>
          <Skill name="Language" data={skills.language} />
        </FlexSkill>
        <FlexSkill flexBasis={flexBasis}>
          <Skill name="Front-end Frameworks" data={skills.frontendFramework} />
        </FlexSkill>
        <FlexSkill flexBasis={flexBasis}>
          <Skill name="Back-end Frameworks" data={skills.backendFramework} />
        </FlexSkill>
        <FlexSkill flexBasis={flexBasis}>
          <Skill name="Testing" data={skills.test} />
        </FlexSkill>
        <FlexSkill flexBasis={flexBasis}>
          <Skill name="Databases" data={skills.database} />
        </FlexSkill>
        <FlexSkill flexBasis={flexBasis}>
          <Skill name="Infrastructure" data={skills.infrastructure} />
        </FlexSkill>
        <PositionedLevelDescriptions data={levelDescriptions} />
      </Container>
    </Section>
  );
};

const CenteredSectionTitle = styled(SectionTitle)`
  text-align: center;
`;

const FlexSkill = styled.div`
  padding: 1rem 0 1rem 0;
  ${(props: { flexBasis: string }) => `flex: 0 0 ${props.flexBasis}`};
`;

const PositionedLevelDescriptions = styled(LevelDescriptions)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
`;
