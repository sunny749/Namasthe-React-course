Namasthe react course 

# parcel
parcel gives some cool features that are
1 dev build
2 local server
3 hmr -hot module replacement
4 it uses File watching algorithem that written in c++
5 parcel gives faster builds using caching(.parcel-cache)
6 it is also take care of expensive thing that is imageOptimization
7 when ever we build on dev mode or prodction mode it minify the files
8 and also bundle the code
9 compress the code
10 consistent hashing 
11 code splitting
12 differential bundling -older browsers support
13 Diagnostic and error handling
14 with parcel we can host our app in https mode also
15 Tree shaking -it automatically remove the code that user did not use

Namaste Food
/**

Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard
 - Img
 - Name of Res, Star Rating, cuisine, delery tie
Footer
Copyright
Links
Address
Contact */
Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";

React Hooks
(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()
2 types Routing in web apps
Client Side Routing
Server Side Routing
Redux Toolkit
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector
Types of testing (devloper)
Unit Testing
Integration Testing
End to End Testing - e2e testing
Setting up Testing in our app
Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom