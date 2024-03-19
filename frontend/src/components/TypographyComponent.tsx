import { Typography } from '@mui/material'
import React from 'react'

interface Props{
    color: string,
    fontSize: string,
    msg: string,
    paddingLeft: string,
    
}

function TypographyComponent({color, fontSize, msg, paddingLeft}: Props) {
  return (
    <Typography
    color='white'
    component="div"
    sx={{ color:{color}, paddingLeft:{paddingLeft} ,fontFamily: '-apple-system', fontStyle: 'italic', fontSize: {fontSize} ,display: { xs: 'none', sm: 'block' } }}
    >
       <span>{msg}</span> 
    </Typography>
  )
}

export default TypographyComponent;