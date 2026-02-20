import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './AuthProvider/Authprovier.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <AuthProvider>
       <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
)