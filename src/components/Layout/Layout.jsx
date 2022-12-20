import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { Header, Footer, FooterText } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
      <Footer>
        <FooterText>@ mymovie, 2022. Powered by anvomm. </FooterText>
      </Footer>
    </>
  );
};
