import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp'
import Faq from './Components/Faq/Faq';
import AdminPanel from './Components/AdminPanel/AdminPanel';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>,
        
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>,
      },
      {
        path:'/faq',
        element: <Faq></Faq>,
      },
      {
        path:'/adminpanel',
        element: <AdminPanel></AdminPanel>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
