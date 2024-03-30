import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import StudentList from './pages/student/StudentList.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <StyledEngineProvider injectFirst>
     {/* <RouterProvider router={router}/> */}
     <StudentList/>
    </StyledEngineProvider>
  </React.StrictMode>,
)
