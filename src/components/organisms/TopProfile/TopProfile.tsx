import React, { FunctionComponent } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

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
    <div>
      <TitleDiv>Ken Fukuyama</TitleDiv>
      <SubTitleDiv>Web Developer</SubTitleDiv>
    </div>
  </>
);

const TitleDiv = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const SubTitleDiv = styled.div`
  font-size: 2rem;
  color: #cccccc;
`;
