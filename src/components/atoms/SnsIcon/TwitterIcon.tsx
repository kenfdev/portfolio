import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Image from '../../../assets/twitter.svg';

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
