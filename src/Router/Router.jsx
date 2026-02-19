import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>
  },
]);


export default Router;