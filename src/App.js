import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurentMenu";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contactus',
        element:<Contact/>
      },
      {
        path:'/restaurent/:resId',
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);