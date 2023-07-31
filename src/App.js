import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashboardLayout from './layout/DashboardLayout';
import Home from './Screens/Home';
import CoverScreen from './Screens/CoverScreen';
import ContactPage from './Screens/ContactPage';

function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <DashboardLayout />,
      children:[
        {
          index: true,
          element: <CoverScreen />
        },
        {
          path:'Home',
          element: <Home />
        },
        {
          path:'Contact',
          element: <ContactPage />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;
