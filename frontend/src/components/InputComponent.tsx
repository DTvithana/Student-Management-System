import { Alert, Box, Grid, TextField } from '@mui/material'

interface Props{
    value: string,
    Md: number,
    type: string,
    label: string,
    objRef: object,
    error: string | null | undefined
}

function InputComponent({ Md, label, objRef, error, value, type}: Props) {
  return (
    <Grid sx={{ padding: '1rem' }} item xs={6} md={Md} >
        <TextField
         { ...objRef}
         id={label}
         type={type}
         value={value}
        InputProps={{
        style: {
            borderRadius: "10px",
            borderWidth: '5px',
            fontFamily: "Roboto",
            borderColor:'#009ee2',

        }}}
        label={label} sx={{ color: 'black'}} size="small" fullWidth />
       {error && <Alert sx={{color: 'white', background:'#FF9494', borderRadius: '12px'}} severity="error">{error}</Alert>}
        
    </Grid>
  )
}

export default InputComponent;