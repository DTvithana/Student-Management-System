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
     <Box paddingBottom='0.5rem' paddingLeft='1rem' paddingTop='0.5rem' sx={{opacity: '0.8', boxShadow: 3}}>
        <Grow in={true} {...(true ? { timeout: 600 } : {})} style={{ transformOrigin: '0 0 0' }}>
    <List
    sx={{ paddingTop: '2rem', paddingLeft: '1rem', borderRadius: '18px' ,width: '260px', height: '800px', bgcolor: '#1A5092', color: 'white' }}
    aria-label="contacts"
  >
        <Typography  color='#A4EBF3' variant="subtitle1" paddingTop='2rem' paddingBottom='1rem'>
                DASHBOARDS
        </Typography>
      <ListItemCom message='Dashboard' icon={<StarIcon sx={{ color: '#A4EBF3' }} />} link={''} /> 
      <ListItemCom message='Messenger' icon={<MmsTwoToneIcon sx={{ color: '#A4EBF3' }} />} link={'messanger'} /> 
      <ListItemCom message='Jobs' icon={<DisplaySettingsTwoToneIcon sx={{ color: '#A4EBF3' }} />} link={'jobs'} /> 

       <Divider/>
        <Typography  color='#A4EBF3' variant="subtitle1" paddingTop='2rem' paddingBottom='1rem'>
                QUALIFICATION
        </Typography>
        <ListItemCom message='Educational' icon={<TableChartTwoToneIcon sx={{ color: '#A4EBF3' }} />} link={'education'}/> 
        <ListItemCom message='Work Experience' icon={<TableChartTwoToneIcon sx={{ color: '#A4EBF3' }} />} link={'workExperience'}/> 

  </List>
        </Grow>
    </Box>
  )
}

export default SideBar