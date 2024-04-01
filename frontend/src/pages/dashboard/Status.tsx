import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    Grow
  } from '@mui/material';
import StatusCard from './StatusCard';
import { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';

interface StdProps{
  stend: number
}

function Status() {
  const [stdCount, setStdCount] = useState<StdProps>();
  const [courseCount, setCourseCount] = useState<StdProps>();

  useEffect(() => {
    const controller = new AbortController();
  
    axios
      .get<StdProps>("http://localhost:5000/student/count")
      .then((res) => setStdCount(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        //setError(err.message);
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
  
    axios
      .get<StdProps>("http://localhost:5000/course/count")
      .then((res) => setCourseCount(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        //setError(err.message);
      });
    return () => controller.abort();
  }, []);
  
  return (
    <Card sx={{borderRadius: '15px',opacity: '0.8',
       transition: "transform 0.16s ease-in-out",
    '&:hover': {
      CSSTransition: '10s',
      transform: "scale3d(1.03, 1.03, 1)"
    }
    }}>
    <Box p={4} paddingLeft='5rem' >
        
        <Box >
        <Grid container spacing={20}>
          
        <StatusCard start={0} end={stdCount} title={'Total Studnets'} b1={'#D1E9FC'} b2={'#79c2fc'} />
        <StatusCard start={0} end={10} title={'Total Activities'} b1={'#D0F2FF'} b2={'#68d3fc'} />
        <StatusCard start={0} end={courseCount} title={'Total Courses'} b1={'#FFF7CD'} b2={'#ffed87'}/>
        
        </Grid>
        </Box> 
        </Box>
   
</Card>
  )
}

export default Status