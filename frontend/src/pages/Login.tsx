import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import backImg from '../assets/image.jpg'
import LamayaImg from '../assets/call_action.svg'
import InputComponent from '../components/InputComponent';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const styles = {
    paperContainer: {
        backgroundImage: `url(${backImg})`
    }
};

function Login() {
  return (
    <Paper style={styles.paperContainer}>
     <Box height='59.8rem' width={'117rem'} display={'flex'}>
        <Box>
            <Grid paddingLeft={'15rem'} paddingTop={'10rem'} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid width={'50rem'} item xs={6}>
                    <Typography
                    color='white'
                    component="div"
                    sx={{ color:'black' ,fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '50px' ,display: { xs: 'none', sm: 'block' } }}
                    >
                       <span>Student Management System</span> 
                    </Typography>
                    <Box paddingTop={'9rem'}>
                    <img
                    srcSet={LamayaImg}
                    src={LamayaImg}
                    loading="lazy"
                    />   
                    </Box> 
                </Grid>
                
                <Grid item xs={6}>
                    
                    <Box paddingTop='4rem' width={'43rem'}>
                    <Typography
                        color='white'
                        component="div"
                        sx={{ color:'#009ee2' , paddingLeft: '10rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '80px' ,display: { xs: 'none', sm: 'block' } }}
                        >
                       <span>Welcome</span> 
                    </Typography>
                    <Typography
                        color='white'
                        component="div"
                        sx={{ color:'#808080' , paddingLeft: '13rem', paddingBottom: '2rem',fontFamily: '-apple-system', fontSize: '20px' ,display: { xs: 'none', sm: 'block' } }}
                        >
                       <span>Login with your Email</span> 
                    </Typography>
                        <InputComponent Md={15} label={'email'}  error={undefined}/>
                        <InputComponent Md={15} label={'password'}  error={undefined}/>
                    </Box>
                    <Box paddingLeft={'1rem'} paddingTop='1.8rem' width='41rem'>
                     <Button type='submit' endIcon={<PersonAddAltIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Login</Button>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
     </Box>
     </Paper>
  )
}

export default Login