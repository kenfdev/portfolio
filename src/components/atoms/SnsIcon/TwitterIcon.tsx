import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
const Image = require('../../../assets/twitter.svg') as string;

export const TwitterIcon: FunctionComponent<{ className?: string }> = ({
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
