import { FC, ReactNode } from 'react';
import { styled } from '../../../styles/stitches';
import { Header } from '../../organisms/Header';

type Props = {
  location: Location;
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children, location }) => {
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

const HeaderWrapper = styled('div', {
  margin: 'auto',
  height: '70px',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  boxShadow: '0 0.02rem 0.25rem 0 rgb(0 0 0 / 10%)',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  zIndex: 1,
  backgroundColor: '#fff',
});

const FlexHeader = styled(Header, {
  flex: 1,
});

const Container = styled('div', {
  width: '100%',
  marginTop: '70px',
  marginRight: 'auto',
  marginLeft: 'auto',
});

const Footer = styled('footer', {
  padding: '0.5rem',
  fontSize: '0.8rem',
});
