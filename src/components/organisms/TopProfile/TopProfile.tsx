import { FunctionComponent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { H1, H2 } from '../../general/Text';
import { Box } from '../../general/Box';

export const TopProfile: FunctionComponent = () => (
  <>
    <StaticImage
      src="../../../images/ken.jpg"
      alt="Ken Fukuyama"
      placeholder="blurred"
      width={150}
      height={150}
      imgStyle={{ borderRadius: '50%' }}
    />
    <Box>
      <H1>Ken Fukuyama</H1>
      <H2 css={{ color: '$gray400' }}>Web Developer</H2>
    </Box>
  </>
);
