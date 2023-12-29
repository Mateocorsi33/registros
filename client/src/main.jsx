import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from '../src/components/pages/home';
import Registros from './components/pages/registros/index.jsx';
import Ingresos from './components/pages/ingresos/index.jsx';
import Inicio from './components/pages/inicio/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: ".",  // Cambiado de "/" a "."
        element: <Inicio />,
      },
      {
        path: "ingresos",  // Esto representa "/home/ingresos"
        element: <Ingresos />,
      },
      {
        path: "registros",  // Esto representa "/home/registros"
        element: <Registros />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
