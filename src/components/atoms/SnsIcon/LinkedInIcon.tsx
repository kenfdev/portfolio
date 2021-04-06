import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
const Image = require('../../../assets/linkedin.svg') as string;

export const LinkedInIcon: FunctionComponent<{ className?: string }> = ({
  className,
}) => (
  <Wrapper className={className}>
    <Image />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
`;
