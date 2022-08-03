import { FunctionComponent } from 'react';
import { styled } from '../../../styles/stitches';
import { Tag } from '../../dataDisplay/Tag';
import { Box } from '../../general/Box';

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
  <Box css={{ mb: '2rem' }}>
    <h3>{data.projectName}</h3>
    <Box css={{ display: 'flex', justifyContent: 'space-between', mb: '1rem' }}>
      <div>
        <div>Role: {data.role}</div>
        <div>Members: {data.membersCount}</div>
      </div>
      <div>{`${data.from} - ${data.to}`}</div>
    </Box>
    <Box css={{ mb: '1rem' }}>{data.description}</Box>
    <Box css={{ mb: '0.3rem' }}>Skills:</Box>
    <TagsContainer>
      {data.skills.map((v, idx) => (
        <Box key={idx}>
          <Tag>{v}</Tag>
        </Box>
      ))}
    </TagsContainer>
  </Box>
);

const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '1rem',
  columnGap: '8px',
});
