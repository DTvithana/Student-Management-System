import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    Grow
  } from '@mui/material';
  import Counter from './Counter';
import StatusCard from './StatusCard';
  
function Status() {
  return (
    <Card sx={{borderRadius: '15px',opacity: '0.8',
       transition: "transform 0.16s ease-in-out",
    '&:hover': {
      CSSTransition: '10s',
      transform: "scale3d(1.03, 1.03, 1)"
    }
    }}>
    <Box p={4} paddingLeft='5rem' >
        <Typography
          sx={{
            pb: 3
          }}
          variant="h5"
          fontFamily='sans-serif'
          fontStyle='oblique'
        >
          Dhanuka Perfomance
        </Typography>
        <Box >
        <Grid container spacing={20}>
          
        <StatusCard start={0} end={500} title={'Total Studnets'} b1={'#D1E9FC'} b2={'#79c2fc'} />
        <StatusCard start={0} end={10} title={'Total Activities'} b1={'#D0F2FF'} b2={'#68d3fc'} />
        <StatusCard start={0} end={250} title={'Total Courses'} b1={'#FFF7CD'} b2={'#ffed87'}/>
        
        </Grid>
        </Box> 
        </Box>
   
</Card>
  )
}

export default Status