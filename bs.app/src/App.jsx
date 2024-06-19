import React from 'react'
import Homepage from './routes/homepage/Homepage'
import Layout from './routes/layout/Layout'
import Profile from './routes/profile/Profile';
import Register from './routes/register/Register';
import Login from './routes/login/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Homepage/>
        },
        {
          path: "/profile",
          element: <Profile/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
    }
  ]);
  
  
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App