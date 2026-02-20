import React from 'react';
import { createBrowserRouter } from 'react-router'; 
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Home/Home';
import MyTechnologies from '../Home/My Technologies/MyTechnologies';
import MyProjects from '../Home/MyProjects/MyProjects';
import AdminControl from '../AdminControl/AdminControl';
import Signin from '../AuthPage/Signin';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "skills", 
        element: <MyTechnologies />
      },
      {
        path: "projects",
        element: <MyProjects />
      },
      {
        path: "muntasir-admin", 
        element: <AdminControl />
      },
    ],
  },
   {
    path: "/signin",
    element: <Signin />
  } 
  
]);

export default Router;