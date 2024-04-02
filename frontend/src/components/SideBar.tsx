import List from '@mui/material/List';
import StarIcon from '@mui/icons-material/Star';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import { TextField, TextareaAutosize, Typography } from '@mui/material'
import {Box, Grow} from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemCom from './ListItem';

function SideBar() {
  return (
     <Box paddingBottom='0.5rem' paddingLeft='0.2rem'  sx={{opacity: '0.8', boxShadow: 3}}>
        <Grow in={true} {...(true ? { timeout: 600 } : {})} style={{ transformOrigin: '0 0 0' }}>
    <List
    sx={{ paddingLeft: '1rem', borderRadius: '18px' ,width: '15.2rem', height: '37.5rem', bgcolor: '#009bd6', color: 'white' }}
    aria-label="contacts"
  >
        <Typography  color='#A4EBF3'  variant="subtitle1" paddingTop='2rem' paddingBottom='5.3rem'>
               Student Management System
        </Typography>
      <ListItemCom message='Dashboard' icon={<StarIcon sx={{ color: '#A4EBF3' }} />} link={''} /> 
      <ListItemCom message='Student' icon={<MmsTwoToneIcon sx={{ color: '#A4EBF3' }} />} link={'student'} /> 
      <ListItemCom message='Course' icon={<DisplaySettingsTwoToneIcon sx={{ color: '#A4EBF3' }} />} link={'course'} /> 
      {/* <ListItemCom message='Activites' icon={<DisplaySettingsTwoToneIcon sx={{ color: '#A4EBF3' }} />} link={'jobs'} />  */}
  </List>
        </Grow>
    </Box>
  )
}

export default SideBar