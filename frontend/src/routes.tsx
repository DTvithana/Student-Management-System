import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentViewCard from "./pages/student/StudentViewCard";
import CourseDashboard from "./pages/course/CourseDashboard";

const router = createBrowserRouter([
    { path: '/',
      element: <Layout/>,
      children: [
        {  path: '',  element: <Dashboard/> },
        {  path: '/student',  element: <StudentDashboard/> },
        {  path: '/student/view',  element: <StudentViewCard/> },
        {  path: '/course',  element: <CourseDashboard/> },
      ]
    },
    {
      path: 'login',
      element: <Login/>,
    }
])

export default router;