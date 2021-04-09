import React, { FunctionComponent } from 'react';
import { Header } from '../../organisms/Header';
import styled from 'styled-components';

type Props = {
  location: Location;
};

export const DefaultLayout: FunctionComponent<Props> = ({
  children,
  location,
}) => {
  return (
    <>
      <HeaderWrapper>
        <FlexHeader location={location} />
      </HeaderWrapper>
      <Container>{children}</Container>
      <Footer>© {new Date().getFullYear()}, Ken Fukuyama</Footer>
    </>
  );
};

const HeaderWrapper = styled.div`
  margin: auto;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  box-shadow: 0 0.02rem 0.25rem 0 rgb(0 0 0 / 10%);
  padding-left: 2rem;
  padding-right: 2rem;
  z-index: 1;
  background-color: #fff;
`;

const FlexHeader = styled(Header)`
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  margin-right: auto;
  margin-left: auto;
`;

const Footer = styled.footer`
  padding: 0.5rem;
  font-size: 0.8rem;
`;
