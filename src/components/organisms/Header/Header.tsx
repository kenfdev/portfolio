import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

type Props = {
  className?: string;
  location: Location;
};

const localeLink = (location: Location, path: string) =>
  location.pathname.startsWith('/ja') ? `/ja${path}` : path;

export const Header: FunctionComponent<Props> = ({ location, className }) => {
  return (
    <Wrapper className={className}>
      <BrandingDiv>Ken Fukuyama</BrandingDiv>
      <Nav>
        <ul>
          <li>
            <StyledLink to={localeLink(location, '/')}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={localeLink(location, '/experiences')}>
              Experiences
            </StyledLink>
          </li>
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

const StyledLink = styled(Link)`
  color: inherit;
`;
