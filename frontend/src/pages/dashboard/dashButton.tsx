import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    Grow
  } from '@mui/material';
import PerformanceCard from './PerformanceCard';
  
function DashButton() {
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
          
        <PerformanceCard start={0} end={500} title={'Help'} b1={'#D1E9FC'} b2={'#79c2fc'} link={'help'}/>
        <PerformanceCard start={0} end={10} title={'Support'} b1={'#D0F2FF'} b2={'#68d3fc'} link={'support'}/>
        <PerformanceCard start={0} end={250} title={'Register New Student'} b1={'#FFF7CD'} b2={'#ffed87'} link={'newSt'}/>
        
        </Grid>
        </Box> 
        </Box>
   
</Card>
  )
}

export default DashButton