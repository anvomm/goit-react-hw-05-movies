import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePageView } from 'pages/HomePageView';

export const App = () => {
  return (
    <div>
      {' '}
      HELLO
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageView />} />
        </Route>
      </Routes>
    </div>
  );
};
