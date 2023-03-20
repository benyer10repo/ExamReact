import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'


import Tabla from './components/Tabla'
import Calculadora from './components/Calculadora'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    
  },
  {
    path: "/tabla",
    element: <Tabla/>,
  },
  {
    path: "/calculadora",
    element: <Calculadora/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
