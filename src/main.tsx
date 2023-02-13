import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import App from './App';
import { Error } from './Screens/Error';
import { Home } from './Screens/Home';
import { LastPage } from './Screens/LastPage';
import { MainPage } from './Screens/MainPage';
import { QRCode } from './Screens/QRCode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/izba',
    element: <Home />,
  },
  {
    path: '/last',
    element: <LastPage />,
  },
  {
    path: '/qrcode',
    element: <QRCode />,
  },
  {
    path: '/error',
    element: <Error />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
