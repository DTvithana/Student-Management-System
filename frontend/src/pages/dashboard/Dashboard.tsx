import { Box, Container, Grid, Grow } from '@mui/material';
import DashButton from './dashButton';
import Calendar from './Calander';

function Dashboard() {
  return (
    <>
    <Container maxWidth="lg">
      <Grid
        width='75rem'
        paddingTop='20px'
        container
        direction="row"
        //justifyContent="center"
        alignItems="stretch"
        spacing={5}
        
      >
        <Grid item lg={7.5} xs={12}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 700 } : {})}>  
                <Box borderRadius ='15px' sx={{ boxShadow: 3}}>
                
                </Box>
            </Grow>    
        </Grid>
        <Grid item lg={3.5} xs={13}>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1200 } : {})}> 
                <Box borderRadius ='15px' sx={{boxShadow: 3}}>
                  <Calendar/>
                </Box>
            </Grow>
        </Grid>
        <Grid item lg={10.1} xs={12}>
          <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1600 } : {})}>   
            <Box borderRadius ='15px' sx={{boxShadow: 3}}>
               <DashButton/>  
            </Box>
          </Grow>  
        </Grid>
      </Grid>
    </Container>
   
  </>  
  )
}

export default Dashboard