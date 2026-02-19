import React from 'react';
import { createBrowserRouter } from 'react-router'; 
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Home/Home';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
     
    ],
  },
]);

export default Router;