import {
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    Grow
  } from '@mui/material';
import ButtonCard from './ButtonCard';
  
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
          
        <ButtonCard  title={'Help'} b1={'#D1E9FC'} b2={'#79c2fc'} link={'help'}/>
        <ButtonCard title={'Support'} b1={'#D0F2FF'} b2={'#68d3fc'} link={'support'}/>
        <ButtonCard title={'Register New Student'} b1={'#FFF7CD'} b2={'#ffed87'} link={'/newSt'}/>
        
        </Grid>
        </Box> 
        </Box>
   
</Card>
  )
}

export default DashButton