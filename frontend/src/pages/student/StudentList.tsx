import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Card, Collapse, Dialog, Divider, Fade, Grid, Grow, InputAdornment, TextField, Typography, Zoom } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import EduCard from './EduCard';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';


interface EduProps{
  _id: string,
  name: string,
  index:string,
}

    function SimpleDialog(props: { onClose: any; selectedValue: any; open: any; }) {
        const { onClose, selectedValue, open } = props;
      
        const handleClose = () => {
          onClose(selectedValue);
        };
      
        return (
          <Dialog 
          sx={{
            backdropFilter: "blur(2px) sepia(5%)",
          }}
          onClose={handleClose} open={open} maxWidth='xl' scroll='body' TransitionComponent={Fade}>
            <StudentEditCard handelClick={handleClose}/>
          </Dialog>
        
        );
      }
      
      SimpleDialog.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        selectedValue: PropTypes.string.isRequired
      };

function StudentList() {
    const ref = useRef<HTMLInputElement>(null)
    const [student, setStudent] = useState<EduProps[]>([]);
    const [error, setError] = useState('');

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 
    
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
          <Card sx={{width: '1300px', borderRadius: '15px'}}>
            <Box p={5} >
                <form onSubmit={(event) => {
                  event.preventDefault();
                  if(ref.current) console.log(ref.current.value);
                }}>
                   <TextField 
                   InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                   fullWidth placeholder='Search' id="outlined-basic" variant="outlined"
                   inputRef={ref}
                   />
                </form>  
              </Box>
                <Grid container spacing={3}>
                
                {/* {student.map((edu) => (
                    <Grid key={edu._id} item xs={12} md={4} lg={6}>
                    <StudentCard
                        id={edu._id}
                        name={edu.name}
                        index={edu.index}
                        handelClick={handelDelete}
                    />
                    </Grid>
                    ))} */}

                </Grid>
                {/* <SimpleDialog
                open={open}
                onClose={handleClose} selectedValue={''}    /> */}
              
          </Card>
    </Grow>        
  )
}

export default StudentList