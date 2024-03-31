import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography, Zoom } from '@mui/material'
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import InputComponent from '../../components/InputComponent';

interface Props {
  handelClick: () => void
}


function CourseEditCard({handelClick}: Props) {
    const [edit, setEdit] = useState<string | undefined>()

    useEffect(() => {
        const savedEdit = localStorage.getItem('editCourse');
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
               <InputComponent Md={6} label={'Course Name'} objRef={register('cNAme')} error={''} />
               <InputComponent Md={6} label={'Course ID'} objRef={register('cID')} error={''}/>

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

export default CourseEditCard