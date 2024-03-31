import { Box, Button, Card, Grid, Grow, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CourseProps{
  _id: string,
  courseName: string,
  courseID: string,
}



function CourseViewCard() {
    const navigate = useNavigate();
    const [view, setView] = useState<CourseProps | null>()
   // console.log(view)

    useEffect(() => {
        const savedView = localStorage.getItem('view');
        if(savedView) { 
            const views = JSON.parse(savedView);
            setView(views[0]) }
       }, [])
    

  return (
    <Grow in={true} {...(true ? { timeout: 700 } : {})} style={{ transformOrigin: '0 0 0' }}>
    <Card sx={{
        width: '50rem',
        alignItems: 'center',
        paddingLeft: '2rem',
        background: '#e1f1fd',
        borderRadius: '15px'
       }}>
      
        <Box p={1} width='640px'>
           <Grid container spacing={1} paddingTop='2rem'>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' > ID</Typography>
                  <Typography>{view?._id}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course ID</Typography>
                  <Typography>{view?.courseID}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                   <Typography paddingTop='1rem' >Course Name</Typography>
                   <Typography>{view?.courseName}</Typography>
                </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
               <Box paddingTop='20px'>
               <Button sx={{
                 bgcolor: '#09bd0c'+ ' !important', 
                 '&:hover': {
                     backgroundColor: '#4EF037',
                     opacity: [0.9, 0.8, 0.7]
                   },
                 color: 'white', width: '120px'
               }} 
               onClick={() => navigate('/course')} 
               variant="contained">
                    Back
                    </Button>
                </Box>
               </Grid>
           </Grid>
        </Box>
        
       </Card>
       </Grow>   
  )
}

export default CourseViewCard