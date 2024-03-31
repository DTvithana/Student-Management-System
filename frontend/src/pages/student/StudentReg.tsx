import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography, Zoom } from '@mui/material'
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import InputComponent from '../../components/InputComponent';
import { useNavigate } from 'react-router-dom';


function StudentReg() {
  const navigate = useNavigate();
  const handelCancel = () => {
    navigate('/')
  }

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>(); 
  const onSubmit = (data: FieldValues) => {
      console.log(data);
      axios.post('http://localhost:8081/student', data )
      .then(res => 
       console.log(res.data) )
       }
  

return (
    <Card sx={{
      width: '60rem',
        alignItems: 'center',
        paddingLeft: '2rem'
       }}>
         <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={1} width='740px' sx={{borderRadius: '15px'}}>
           <Typography variant='subtitle1'>
             Student Registration
           </Typography>
           <Grid container spacing={2} paddingTop='2rem'>
               <InputComponent Md={6} label={'First Name'} objRef={register('fName')} error={''} />
               <InputComponent Md={6} label={'Last Name'} objRef={register('lName')} error={''}/>
               <InputComponent Md={15} label={'Address'} objRef={register('address')} error={''}/>
               <InputComponent Md={15} label={'BirthDay'} objRef={register('birthDay')} error={''}/>
               <InputComponent Md={15} label={'Degree'} objRef={register('degree')} error={''}/>
               <InputComponent Md={15} label={'Course 1'} objRef={register('course1')} error={''}/>
               <InputComponent Md={15} label={'Course 2'} objRef={register('course2')} error={''}/>
               <InputComponent Md={15} label={'Course 3'} objRef={register('course3')} error={''}/>
               <InputComponent Md={15} label={'Course 4'} objRef={register('course4')} error={''}/>
               
               <Grid item xs={6} md={6}>
                 <Button type='submit' sx={{ bgcolor: '#009ee2', color: 'black',height: '2rem', borderRadius: '12px'}} variant="outlined" fullWidth>Save</Button>
               </Grid>
               <Grid item xs={6} md={6} >
                 <Button onClick={handelCancel} 
                 sx={{ bgcolor: '#009ee2', color: 'black', height: '2rem', borderRadius: '12px'}} variant="outlined" fullWidth>cancel</Button>
               </Grid>
              
           </Grid>
        </Box>
         </form>
       </Card>
  )
}

export default StudentReg