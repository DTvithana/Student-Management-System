import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import backImg from '../assets/image.jpg'
import LamayaImg from '../assets/call_action.svg'
import InputComponent from '../components/InputComponent';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import TypographyComponent from '../components/TypographyComponent';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import axios, { CanceledError } from 'axios';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    email: z.string().email("This is not a valid email."),
    password: z.string().min(3)
  });

type FormData = z.infer<typeof schema>
  

const styles = {
    paperContainer: {
        backgroundImage: `url(${backImg})`
    }
};

function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({ resolver: zodResolver(schema)});
    const [error, setError] = useState('');
    const [ err, setErr ] = useState('')

    const onSubmit = (data: FieldValues) => {
      const controller = new AbortController();

     console.log(data)
     axios.post('http://localhost:5000/admin/login',  data )
     .then(res => {
      console.log(res.data);
      {if(res.data) 
       { 
        localStorage.setItem('admin', JSON.stringify(res.data));
        navigate('/admin');}} }
    )
    .catch(err => {
      if(err instanceof CanceledError) return;
      setError(err.response.data)
     
    });

    console.log(data)
    navigate('') 
    return () => controller.abort();
   }
   console.log(error)
   
  return (
    <Paper style={styles.paperContainer}>
     <Box height='45.8rem' width={'93rem'} display={'flex'}>
        <Box>
            <Grid paddingLeft={'5rem'} paddingTop={'5rem'} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <Box paddingTop='4rem' width={'43rem'}>
                    <TypographyComponent paddingLeft='10rem' color={'#009ee2'} fontSize={'80px'} msg={'Welcome'}/>
                    <TypographyComponent paddingLeft='13rem' color={'#808080'} fontSize={'20px'} msg={'Login with your Email'}/>
                        <InputComponent Md={15} label={'email'} objRef={register('email')} error={errors.email?.message} />
                        <InputComponent Md={15} label={'password'}  objRef={register('password')} error={errors.password?.message}/>
                    </Box>
                    <Box paddingLeft={'1rem'} paddingTop='1.8rem' width='41rem'>
                     <Button type='submit' endIcon={<PersonAddAltIcon />} sx={{height: '2.8rem', borderRadius: '12px'}} variant="outlined" fullWidth >Login</Button>
                    </Box>
                </form>
                </Grid>
                
            </Grid>
        </Box>
     </Box>
     </Paper>
  )
}

export default Login