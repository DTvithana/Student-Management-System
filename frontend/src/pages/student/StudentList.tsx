import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Card, Collapse, Dialog, Divider, Fade, Grid, Grow, InputAdornment, TextField, Typography, Zoom } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import EduCard from './EduCard';
import axios, { CanceledError } from 'axios';
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
    const [student, setStudent] = useState<EduProps[]>([]);

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

  

    useEffect(() => {
      const controller = new AbortController();

      axios
        .get<EduProps[]>('http://localhost:8081/student')
        .then((res) => setStudent(res.data))
        .catch(err => {
          if(err instanceof CanceledError) return;
          setError(err.message)
        });
        return () => controller.abort();
    }, [])

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