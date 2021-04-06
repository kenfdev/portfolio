import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
const Image = require('../../../assets/github.svg') as string;

export const GitHubIcon: FunctionComponent<{ className?: string }> = ({
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
