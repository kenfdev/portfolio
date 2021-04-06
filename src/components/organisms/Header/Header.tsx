import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Header: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  return (
    <Wrapper className={className}>
      <BrandingDiv>Ken Fukuyama</BrandingDiv>
      <Nav>
        <ul>
          {/* <li>Home</li>
          <li>Blog</li> */}
        </ul>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandingDiv = styled.div`
  font-size: 1.3rem;
`;

const Nav = styled.nav`
  ul {
    li {
      display: inline-block;
      list-style: none;
      margin-left: 1rem;
    }
  }
`;
