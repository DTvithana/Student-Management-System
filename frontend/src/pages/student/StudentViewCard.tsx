import { Box, Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Grow, Link, List, ListItem, ListItemText, TextField, TextareaAutosize, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props{
    id: string,
    fName: string,
    lName: string,
    address: string,
    birthday: string,
    degree: string,
    course1: string,
    course2: string,
    course3: string,
    course4: string,
    handelClick: (id: string) => void
}

function StudentViewCard({id, fName, lName, address, birthday, degree, course1, course2, course3, course4, handelClick }: Props) {
  return (
    <Grow in={true} {...(true ? { timeout: 700 } : {})} style={{ transformOrigin: '0 0 0' }}>
    <Card sx={{
        alignItems: 'center',
        paddingLeft: '2rem',
        background: '#e1f1fd',
        borderRadius: '15px'
       }}>
      
        <Box p={1} width='640px'>
           <Grid container spacing={1} paddingTop='2rem'>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Student ID</Typography>
                  <Typography>{id}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Full Name</Typography>
                  <Typography>{fName}+' '+{lName}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                   <Typography paddingTop='1rem' >Address</Typography>
                   <Typography>{address}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
                    <Typography paddingTop='1rem' >BirthDay</Typography>
                   <Typography>{birthday}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Degree</Typography>
                  <Typography>{degree}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course 1</Typography>
                  <Typography>{course1}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course 2</Typography>
                  <Typography>{course2}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course 3</Typography>
                  <Typography>{course3}</Typography>
                </Grid>
                <Grid sx={{ padding: '1rem' }} item xs={6} md={6} >
                  <Typography paddingTop='1rem' >Course 4</Typography>
                  <Typography>{course4}</Typography>
                </Grid>
               <Grid sx={{ padding: '1rem' }} item xs={6} md={15}>
               <Box paddingTop='20px'>
               <Button sx={{
                 bgcolor: '#09bd0c'+ ' !important', 
                 '&:hover': {
                     backgroundColor: '#4EF037',
                     opacity: [0.9, 0.8, 0.7]
                   },
                 color: 'white', width: '120px'
               }} 
               onClick={() => handelClick(id)} variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                </Box>
               </Grid>
           </Grid>
        </Box>
        
       </Card>
       </Grow>   
  )
}

export default StudentViewCard