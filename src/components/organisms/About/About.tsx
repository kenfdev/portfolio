import React, { FunctionComponent } from 'react';
import {
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  GitHubIcon,
} from '../../atoms/SnsIcon';
import styled from 'styled-components';
import Section from '../../shared/Section';
import SectionTitle from '../../shared/SectionTitle';

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

export const About: FunctionComponent<Props> = ({ content, sns }) => {
  return (
    <Section>
      <SectionTitle>About me</SectionTitle>
      <ContentDiv>
        <LeftDiv>{content}</LeftDiv>
        <RightDiv>
          <IconAnchor href={sns.twitter} target="_blank">
            <TwitterIcon />
          </IconAnchor>
          <IconAnchor href={sns.facebook} target="_blank">
            <FacebookIcon />
          </IconAnchor>
          <IconAnchor href={sns.github} target="_blank">
            <GitHubIcon />
          </IconAnchor>
          <IconAnchor href={sns.linkedin} target="_blank">
            <LinkedInIcon />
          </IconAnchor>
        </RightDiv>
      </ContentDiv>
    </Section>
  );
};

const IconAnchor = styled.a`
  margin-bottom: 1rem;
`;

const LeftDiv = styled.div`
  padding: 0 2rem 0 0;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    margin: 1rem auto 0 auto;
    width: 50%;
    flex-direction: row;
    justify-content: space-around
  }
`;

const ContentDiv = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
