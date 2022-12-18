import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
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
        <Section>
          <Container>
            <Outlet />
          </Container>
        </Section>
      </main>
      <footer></footer>
    </>
  );
};
