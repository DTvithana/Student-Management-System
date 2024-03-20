import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import backImg from '../assets/image.jpg'
import LamayaImg from '../assets/call_action.svg'
import InputComponent from '../components/InputComponent';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import TypographyComponent from '../components/TypographyComponent';

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
                    <TypographyComponent paddingLeft='' color={'black'} fontSize={'50px'} msg={'Student Management System'}/>
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
                    <TypographyComponent paddingLeft='10rem' color={'#009ee2'} fontSize={'80px'} msg={'Welcome'}/>
                    <TypographyComponent paddingLeft='13rem' color={'#808080'} fontSize={'20px'} msg={'Login with your Email'}/>
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