import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Card, Collapse, Dialog, Divider, Fade, Grid, Grow, InputAdornment, TextField, Typography, Zoom } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import CourseListComponent from './CourseListComponent';


interface CourseProps{
  _id: string,
  courseName: string,
  courseID: string,
}



function CourseList() {
    const navigate = useNavigate();
    const [course, setCourse] = useState<CourseProps[]>([
      {
        _id: '1',
        courseName: 'Introduction to Computer Science',
        courseID: 'CS101',
      },
      {
        _id: '2',
        courseName: 'Data Structures and Algorithms',
        courseID: 'CS202',
      },
      {
        _id: '3',
        courseName: 'Calculus I',
        courseID: 'MATH201',
      },
      {
        _id: '4',
        courseName: 'Principles of Economics',
        courseID: 'ECON101',
      },
      {
        _id: '5',
        courseName: 'English Literature',
        courseID: 'ENG301',
      },
      {
        _id: '6',
        courseName: 'Organic Chemistry',
        courseID: 'CHEM302',
      },
      {
        _id: '7',
        courseName: 'International Business Management',
        courseID: 'BUS401',
      },
      {
        _id: '8',
        courseName: 'Introduction to Psychology',
        courseID: 'PSY101',
      },
      {
        _id: '9',
        courseName: 'Principles of Accounting',
        courseID: 'ACC201',
      },
      {
        _id: '10',
        courseName: 'Web Development Fundamentals',
        courseID: 'CS301',
      },
    ]);
    const [SearchCourse, setSearchCourse] = useState<CourseProps[]>([...course])
    const [error, setError] = useState('');
    const [view, setView] = useState<CourseProps[]>([])
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 

    const handleView = (_id: string) => {
     const views = course.filter(u => u._id === _id);
     localStorage.setItem('view', JSON.stringify(views));
     navigate('/Course/view')
    }

    const handleEdit = (_id: string) => {
      localStorage.setItem('edit', JSON.stringify(_id));
     }
    
    const SearchStd = (_id: string) => {
      if(_id) setSearchCourse(course.filter(u => u._id === _id));
      else setSearchCourse(course)
      console.log(course);
    }
    

    // const handelDelete = (id: string) => {
    //   const originalWork = [...Course];
    //   setCourse(Course.filter(u => u._id !== id));

    //   axios.delete(`http://localhost:5000/api/Course/${id}` )
    //   .catch(err => {
    //     setError(err.message);
    //     setCourse(originalWork)
    //   })
    // }

    // useEffect(() => {
    //   const controller = new AbortController();
  
    //   axios
    //     .get<CourseProps[]>('http://localhost:5000/api/Course')
    //     .then((res) => setCourse(res.data))
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
                
                <CourseListComponent data={SearchCourse} handleView={handleView} handleEdit={handleEdit} />
      

                </Grid>
                {/* <SimpleDialog
                open={open}
                onClose={handleClose} selectedValue={''}    /> */}
              
          </Card>
    </Grow>        
  )
}

export default CourseList