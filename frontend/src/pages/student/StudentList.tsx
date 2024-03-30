import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Collapse, Dialog, Divider, Fade, Grid, Grow, Typography, Zoom } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import EduCard from './EduCard';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


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
                 <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  </Search>
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