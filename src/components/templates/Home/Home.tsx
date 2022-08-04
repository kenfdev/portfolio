import { FunctionComponent } from 'react';
import { DefaultLayout } from '../DefaultLayout';
import { TopProfile } from '../../organisms/TopProfile';
import { About, Sns } from '../../organisms/About';
import { Skills, SkillsData, LevelDescription } from '../../organisms/Skills';
import { Box } from '../../general/Box';
interface Props {
  location: Location;
  about: string;
  skills: SkillsData;
  levelDescriptions: LevelDescription[];
  sns: Sns;
}

export const Home: FunctionComponent<Props> = ({
  location,
  about,
  skills,
  levelDescriptions,
  sns,
}) => {
  return (
    <DefaultLayout location={location}>
      <Box css={{ p: '2rem 0', textAlign: 'center' }}>
        <TopProfile />
      </Box>
      <Box css={{ m: '1rem auto', p: '0 1rem', maxWidth: '50rem' }}>
        <About content={about} sns={sns} />
      </Box>
      <Box css={{ m: '1rem 0' }}>
        <Skills levelDescriptions={levelDescriptions} skills={skills} />
      </Box>
    </DefaultLayout>
  );
};
