import React, { Component } from "react"
import { createBrowserRouter,Router,RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Components/Home";
import Asset from './Pages/Asset'
import Maintenance from './Pages/Maintainance'
import Depreciation from './Pages/Depreciation'
import Components from './Pages/Component'
import Login from "./Pages/Login";
import AssetTypes from './Pages/AssetTypes'
import Brand from './Pages/Brand'
import Suppliers from './Pages/Supliers'
import Location from './Pages/Location'
import Employees from './Pages/Employees'
import Departments from './Pages/Department'
import Reports from './Pages/Report'
import Setting from './Pages/Setting'
import UserPage from "./Pages/UserPage";
import DepreciationTable from "./Pages/depreciationTable";
import Accounts from "./Pages/Accounts";

// import Bank from "./Pages/bank_and_cash_accounts";



function App(){
  const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path:"/assets",
        element:<Asset/>
      },
      {
        path:"/components",
        element:<Components/>
      },
      {
        path:"/maintenances",
        element:<Maintenance/>
      },
      {
        path:"/depreciations",
        element:<Depreciation/>
      },
      {
        path:"/asset-types",
        element:<AssetTypes/>
      },
      {
        path:"/brands",
        element:<Brand/>

      },
      {
        path:"/suppliers",
        element:<Suppliers/>
      },
      {
        path:"/locations",
        element:<Location/>
      },{
        path:"/employees",
        element:<Employees/>
      },
      {
        path:"/accounts",
        element:<Accounts/>,
        children:[
          // {
          //   path: "/bank_and_cash_accounts",
          //   element: <Bank/>
          // },
          // {
          //   path: "/transaction",
          //   element: <Transactions/>
          // }
        ]
      },
      {
        path:"/departments",
        element:<Departments/>
      },
      {
        path:"/reports",
        element:<Reports/>
      },
      {
        path:"/settings",
        element:<Setting/>
      }

    ]},
    {
      path:"/login",
      element:<Login/>
    },{
      path:"/user",
      element:<UserPage/>
    }

]);
return(
  <RouterProvider router={appRouter}/>
)}
export default App