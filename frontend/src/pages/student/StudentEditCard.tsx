import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography, Zoom } from '@mui/material'
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import InputComponent from '../../components/InputComponent';

interface Props {
  handelClick: () => void
}


function StudentEditCard({handelClick}: Props) {
    const [edit, setEdit] = useState<string | undefined>()

    useEffect(() => {
        const savedEdit = localStorage.getItem('edit');
        if(savedEdit) { 
            const edits = JSON.parse(savedEdit);
            setEdit(edits) }
       }, [])

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>(); 
//   const onSubmit = (data: FieldValues) => {
//       console.log(data);
//       axios.post('http://localhost:5000/api/education', data )
//       .then(res => 
//        console.log(res.data) )
//        }
//   }

return (
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem'
       }}>
         <form >
        <Box p={1} width='740px' sx={{borderRadius: '15px'}}>
           <Typography variant='subtitle1'>
             Fields marked with * are required.
           </Typography>
           <Grid container spacing={2} paddingTop='2rem'>
               <InputComponent Md={15} label={'id'} value={edit}  error={''}/>
               <InputComponent Md={6} label={'First Name'} objRef={register('fNAme')} error={''} />
               <InputComponent Md={6} label={'Last Name'} objRef={register('lName')} error={''}/>
               <InputComponent Md={15} label={'Address'} objRef={register('address')} error={''}/>
               <InputComponent Md={15} label={'BirthDay'} objRef={register('birthDay')} error={''}/>
               <InputComponent Md={15} label={'Degree'} objRef={register('degree')} error={''}/>
               <InputComponent Md={15} label={'Course 1'} objRef={register('course1')} error={''}/>
               <InputComponent Md={15} label={'Course 2'} objRef={register('course2')} error={''}/>
               <InputComponent Md={15} label={'Course 3'} objRef={register('course3')} error={''}/>
               <InputComponent Md={15} label={'Course 4'} objRef={register('course4')} error={''}/>

               <Grid item xs={6} md={1.7} >
                 <Button onClick={handelClick}  sx={{borderRadius: '12px'}} variant="outlined">cancel</Button>
               </Grid>
               <Grid item xs={6} md={1.5}>
                 <Button type='submit'  variant="contained" sx={{ width: '95px',borderRadius: '12px'}}>Save</Button>
               </Grid>
           </Grid>
        </Box>
         </form>
       </Card>
  )
}

export default StudentEditCard