import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Login() {
  return (
     <Box display={'flex'}>
        <Grid height='60.8rem' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <Typography
                color='white'
                component="div"
                sx={{ paddingLeft: '2.8rem',fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '50px' ,display: { xs: 'none', sm: 'block' } }}
                >
            </Grid>
            <Grid item xs={6}>
                
            </Grid>
        </Grid>
     </Box>
  )
}

export default Login