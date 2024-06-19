import React from 'react'
import Homepage from './routes/homepage/Homepage'
import Layout from './routes/layout/Layout'
import Profile from './routes/profile/Profile';
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
        }
      ]
    }
  ]);
  
  
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App