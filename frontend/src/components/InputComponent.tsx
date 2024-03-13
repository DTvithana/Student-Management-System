import { Alert, Box, Grid, TextField } from '@mui/material'

interface Props{
    Md: number,
    label: string,
    objRef: object,
    error: string | null | undefined
}

function InputComponent({ Md, label, objRef, error}: Props) {
  return (
    <Grid sx={{ padding: '1rem' }} item xs={6} md={Md} >
        <TextField
         { ...objRef}
         id={label}
        InputProps={{
        style: {
            borderRadius: "10px",
            fontFamily: "Roboto"
        }}}
        label={label} sx={{ color: 'black'}} size="small" fullWidth />
       {error && <Alert sx={{color: 'white', background:'#FF9494', borderRadius: '12px'}} severity="error">{error}</Alert>}
        
    </Grid>
  )
}

export default InputComponent;