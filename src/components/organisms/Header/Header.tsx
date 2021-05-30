import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import { Dropdown } from '../../molecules/Dropdown';

type Props = {
  className?: string;
  location: Location;
};

const localeLink = (isJapanese: boolean, path: string) =>
  isJapanese ? `/ja${path}` : path;

const items = [
  { id: 'ja', value: '日本語' },
  { id: 'en', value: 'English' },
];

export const Header: FunctionComponent<Props> = ({ location, className }) => {
  const isJapanese = location.pathname.startsWith('/ja');

  return (
    <Wrapper className={className}>
      <BrandingDiv>Ken Fukuyama</BrandingDiv>
      <Nav>
        <ul>
          <li>
            <StyledLink to={localeLink(isJapanese, '/')}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={localeLink(isJapanese, '/experiences')}>
              Experiences
            </StyledLink>
          </li>
          <li>
            <StyledLink to={localeLink(isJapanese, '/courses')}>
              Courses
            </StyledLink>
          </li>
          <li>
            <Dropdown
              selectedId={isJapanese ? 'ja' : 'en'}
              items={items}
              onSelected={(lang: string) => {
                const path =
                  lang === 'ja'
                    ? `/ja${location.pathname}`
                    : location.pathname.replace('/ja', '');
                navigate(path);
              }}
            />
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
  & > ul {
    & > li {
      display: inline-block;
      list-style: none;
      margin-left: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
`;
