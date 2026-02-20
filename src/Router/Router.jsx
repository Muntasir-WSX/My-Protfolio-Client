import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router'; 
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Home/Home';
import MyTechnologies from '../Home/My Technologies/MyTechnologies';
import MyProjects from '../Home/MyProjects/MyProjects';
import Signin from '../AuthPage/Signin';
import AdminRoute from '../Routes/AdminRoutes';
import AdminLayouts from '../Layouts/AdminLayouts';
import ManageExperience from '../Admin Routes/ManageExperience';
import ManageEducation from '../Admin Routes/ManageEducation';
import ManageCertificates from '../Admin Routes/ManageCertificates';
import ClientMessages from '../Admin Routes/ClientMessages';
import AdminSettings from '../Admin Routes/AdminSettings';
import ManageProjects from '../Admin Routes/ManageProjects';

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
     
    ],
  },
   {
        path: "muntasir-admin", 
        element: <AdminRoute><AdminLayouts></AdminLayouts></AdminRoute>,
        children: [
          {
      index: true, 
      element: <Navigate to="manage-projects" replace /> 
    },
          {
            path: "manage-projects",
            element: <ManageProjects /> 
          },
           {
            path: "manage-education",
            element: <ManageEducation />
          },
          {
            path: "manage-experience",
            element: <ManageExperience />
          },
         
          {
            path: "manage-certificates",
            element: <ManageCertificates />
          },
          {
            path: "messages",
            element: <ClientMessages />
          },
          {
            path: "settings",
            element: <AdminSettings />
          }
        ]

      },
      // signin routes
   {
    path: "/signin",
    element: <Signin />
  } 
  
]);

export default Router;