import { Card, Grid, Grow, Typography } from '@mui/material'
import Counter from './Counter'

interface Props {
    start: number,
    end: number,
    title: string,
    b1: string,
    b2: string
    link: string
}

function StatusCard({start, end, title, b1, b2}:Props) {
  return (
    <Grid item xs={12} md={4} lg={3}>
    <Grow in={true}>
    <Card
        sx={{
          width: 200,
          height: 200,
          paddingTop: '3rem',
          backgroundColor: b1,
          borderRadius: '12px',
          textAlign: 'center',
          transition: "transform 0.15s ease-in-out",
          '&:hover': {
            backgroundColor: b2,
            CSSTransition: '10s',
            opacity: [1, 1, 1],
            transform: "scale3d(1.02, 1.02, 1)"
          },
          ':hover': {
            boxShadow: 20
          }
         
        }}
      >
      <Typography variant="subtitle2"  fontFamily='sans-serif' fontWeight='440' sx={{ opacity: 0.72 }} 
        style={{ transformOrigin: '0 0 0' }}
      >
        <h4>{title}</h4>
      </Typography>
      <Typography sx={{paddingTop: '1rem'}} variant="h4" fontFamily='sans-serif' fontWeight='550'><Counter start={start} end={end}/></Typography>
    </Card> 
  </Grow>
</Grid>
  )
}

export default StatusCard