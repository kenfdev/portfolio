import { FunctionComponent } from 'react';
import { Box } from '../../general/Box';
import { Experience, ExperienceData } from './Experience';

type Props = {
  experiences: ExperienceData[];
};

export const ExperiencesList: FunctionComponent<Props> = ({ experiences }) => (
  <div>
    {experiences.map((data, idx) => (
      <Box css={{ mb: '3rem' }} key={idx}>
        <Experience data={data} />
      </Box>
    ))}
  </div>
);
