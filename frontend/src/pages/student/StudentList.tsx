import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Card, Collapse, Dialog, Divider, Fade, Grid, Grow, InputAdornment, TextField, Typography, Zoom } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import EduCard from './EduCard';

import SearchIcon from '@mui/icons-material/Search';
import StudentListComponent from './StudentListComponent';
import StudentViewCard from './StudentViewCard';
import { useNavigate } from 'react-router-dom';


interface EduProps{
  _id: string,
  fName: string,
  lName: string,
  birthday: string,
  degree: string,
  index:string,
  address: string,
  course1: string,
  course2: string,
  course3: string,
  course4: string,
}



function StudentList() {
    const navigate = useNavigate();
    const ref = useRef<HTMLInputElement>(null)
    const [student, setStudent] = useState<EduProps[]>([
      {
        _id: '1',
        fName: 'John',
        lname: 'Doe',
        birthday: '1990-01-01',
        degree: 'Bachelor of Science',
        index: 'ABC123',
        address: '123 Main St.',
        course1: 'Math 101',
        course2: 'English 101',
        course3: 'Physics 101',
        course4: 'Chemistry 101',
      },
      {
        _id: '2',
        fName: 'Jane',
        lname: 'Smith',
        birthday: '1992-05-15',
        degree: 'Bachelor of Arts',
        index: 'DEF456',
        address: '456 Oak Ave.',
        course1: 'History 101',
        course2: 'Spanish 101',
        course3: 'Psychology 101',
        course4: 'Art 101',
      },
      {
        _id: '3',
        fName: 'Bob',
        lname: 'Johnson',
        birthday: '1988-09-20',
        degree: 'Master of Business Administration',
        index: 'GHI789',
        address: '789 Elm St.',
        course1: 'Marketing 101',
        course2: 'Finance 101',
        course3: 'Management 101',
        course4: 'Accounting 101',
      },
      {
        _id: '4',
        fName: 'Bob',
        lname: 'Johnson',
        birthday: '1988-09-20',
        degree: 'Master of Business Administration',
        index: 'GHI789',
        address: '789 Elm St.',
        course1: 'Marketing 101',
        course2: 'Finance 101',
        course3: 'Management 101',
        course4: 'Accounting 101',
      },
      {
        _id: '5',
        fName: 'Bob',
        lname: 'Johnson',
        birthday: '1988-09-20',
        degree: 'Master of Business Administration',
        index: 'GHI789',
        address: '789 Elm St.',
        course1: 'Marketing 101',
        course2: 'Finance 101',
        course3: 'Management 101',
        course4: 'Accounting 101',
      },
    ]);
    const [SearchStudent, setSearchStudent] = useState<EduProps[]>([...student])
    const [error, setError] = useState('');
    const [view, setView] = useState<EduProps[]>([])
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 

    const handleView = (_id: string) => {
     const views = student.filter(u => u._id === _id);
     localStorage.setItem('view', JSON.stringify(views));
     navigate('/student/view')
    }

    const handleEdit = (_id: string) => {
      localStorage.setItem('edit', JSON.stringify(_id));
     }
    
    const SearchStd = (_id: string) => {
      if(_id) setSearchStudent(student.filter(u => u._id === _id));
      else setSearchStudent(student)
      console.log(student);
    }
    

    // const handelDelete = (id: string) => {
    //   const originalWork = [...student];
    //   setStudent(student.filter(u => u._id !== id));

    //   axios.delete(`http://localhost:5000/api/student/${id}` )
    //   .catch(err => {
    //     setError(err.message);
    //     setstudent(originalWork)
    //   })
    // }

    // useEffect(() => {
    //   const controller = new AbortController();
  
    //   axios
    //     .get<EduProps[]>('http://localhost:5000/api/student')
    //     .then((res) => setStudent(res.data))
    //     .catch(err => {
    //       if(err instanceof CanceledError) return;
    //       setError(err.message)
    //     });
    //     return () => controller.abort();
    // }, [])

  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}> 
          <Card sx={{width: '60rem', borderRadius: '15px', paddingBottom: '2rem'}}>
            <Box p={5} >
                   <TextField 
                   InputProps={{
                    sx:{ borderRadius: '15px' },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                   fullWidth placeholder='Search' id="outlined-basic" variant="outlined"
                   onChange={(event) => SearchStd(event.target.value)}
                   />
              </Box>
                <Grid container spacing={3}>
                
                <StudentListComponent data={SearchStudent} handleView={handleView} handleEdit={handleEdit} />
      

                </Grid>
                {/* <SimpleDialog
                open={open}
                onClose={handleClose} selectedValue={''}    /> */}
              
          </Card>
    </Grow>        
  )
}

export default StudentList