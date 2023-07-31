import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashboardLayout from './layout/DashboardLayout';
import Home from './Screens/Home';
import CoverScreen from './Screens/CoverScreen';
import ContactPage from './Screens/ContactPage';
import About from './Screens/About';
import Menu from './Screens/Menu';

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
        {
          path:'Menu',
          element: <Menu />
        },
        {
          path:'About',
          element: <About />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;
