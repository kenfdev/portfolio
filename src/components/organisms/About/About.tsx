import { FC } from 'react';
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { styled } from '../../../styles/stitches';

import Section from '../../general/Section/Section';
import SectionTitle from '../../general/SectionTitle/SectionTitle';

export type Sns = {
  twitter: string;
  facebook: string;
  github: string;
  linkedin: string;
};

type Props = {
  content: string;
  sns: Sns;
};

export const About: FC<Props> = ({
  content,
  sns: { facebook, github, linkedin, twitter },
}) => {
  return (
    <Section>
      <SectionTitle>About me</SectionTitle>
      <Container>
        <Content>{content}</Content>

        <SnsIcons>
          <IconWrapper href={twitter} target="_blank">
            <FaTwitter size={32} />
          </IconWrapper>

          <IconWrapper href={facebook} target="_blank">
            <FaFacebook size={32} />
          </IconWrapper>
          <IconWrapper href={github} target="_blank">
            <FaGithub size={32} />
          </IconWrapper>
          <IconWrapper href={linkedin} target="_blank">
            <FaLinkedin size={32} />
          </IconWrapper>
        </SnsIcons>
      </Container>
    </Section>
  );
};

const Content = styled('div', {
  padding: '0 2rem 0 0',
});

const IconWrapper = styled('a', {
  width: '2rem',
  height: '2rem',
});

const SnsIcons = styled('div', {
  display: 'flex',
  margin: '1rem auto 0 auto',
  width: '50%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  '@bp2': {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '1rem',
    margin: 0,
  },
});

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@bp2': {
    flexDirection: 'row',
  },
});
