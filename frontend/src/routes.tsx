import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import StudentDashboard from "./pages/student/StudentDashboard";

const router = createBrowserRouter([
    { path: '/',
      element: <Layout/>,
      children: [
        {  path: '',  element: <Dashboard/> },
        {  path: '/student',  element: <StudentDashboard/> },
      ]
    },
    {
      path: 'login',
      element: <Login/>,
    }
])

export default router;