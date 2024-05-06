import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CareerPage from './Pages/CareerPage';
import LocationsPage from './Pages/LocationsPage';
const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<AboutPage/>
    },
    {
      path:"/career",
      element:<CareerPage/>
    },
    {
      path:"/location",
      element:<LocationsPage/>
    },
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

