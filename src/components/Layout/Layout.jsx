import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </>
  );
};
