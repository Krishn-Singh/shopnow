
import React, { Suspense } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loader from './components/Loader';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Body = React.lazy(() => import('./components/Body'));
const Product = React.lazy(() => import('./components/Product'));
const BigHeroSection = React.lazy(() => import('./components/BigHeroSection'));
// const CartPage = React.lazy(() => import('./components/CartPage'));
const CartPage = React.lazy(() => delay(2500).then(() => import('./components/CartPage')));
// const delayedImport = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve(import('./components/CartPage'));
//     }, 2500);
//   });

// const CartPage = React.lazy(() => delayedImport());


const appRouter =createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: < BigHeroSection />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/cartpage',
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div> <Loader /></div>}>
     <RouterProvider router={appRouter}/>
     </Suspense>
  );
}

export default App;
