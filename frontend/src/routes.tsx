import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
    { path: '/',
      element: <Layout/>,
      children: [
        {  path: '',  element: <Dashboard/> },
      ]
    },
    {
      path: 'login',
      element: <Login/>,
    }
])

export default router;