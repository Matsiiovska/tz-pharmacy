import { Navigate, Route, Routes } from 'react-router-dom';
//import Layout from './Layout/Layout';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const shopPage = lazy(() => import('pages/shopPage/shopPage'));
const shoppingCartPage = lazy(() =>
  import('pages/shoppingCartPage/shoppingCartPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<shopPage />} />
        <Route path="shopingcart" element={<shoppingCartPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
