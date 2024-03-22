import React,{lazy,Suspense,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurentMenu";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import appStore from "./utils/appStore.js";
import {Provider} from 'react-redux'
import Cart from './components/Cart'
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
  const [loggedIn,setLoggedIn]=useState({loggedInUser:'Sunny Gante'})
  return (
    // we are not Provide new context heare so when we access heare we get
    // default user as context
    <div className="app">
      {/* heare we provide the new context so inside this we get updated data
      we can provide multipile values for different components 
      */}
      <Provider store={appStore}>
      <UserContext.Provider value={{...loggedIn,setLoggedIn}}>
      <Header />
      </UserContext.Provider>
      <UserContext.Provider value={{...loggedIn,setLoggedIn}}>
      <Outlet />
      </UserContext.Provider>
      </Provider>
    </div>
  );
};
const Grocery=lazy(()=>import("./components/Grocery.js"))
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
        path:'/grocery',
        element:<Suspense fallback={<Shimmer></Shimmer>}><Grocery/></Suspense>
      },
      {
        path:'/restaurent/:resId',
        element:<RestaurantMenu/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
    ],
    errorElement:<Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);