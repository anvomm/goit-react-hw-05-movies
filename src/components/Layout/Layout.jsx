import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';

export const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <Navigation />
        </Container>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </>
  );
};
