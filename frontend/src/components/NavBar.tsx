import { AppBar, Badge, Box, Button, IconButton,  List, ListItem, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';
import NavListComponent from './NavListComponent';

interface Props {
  user: string | undefined,
  handelClick: () => void,
  name: string | undefined
}

function UserNavBar({user, handelClick, name}: Props) {

  return (
    <Box borderRadius='18'  paddingLeft='1rem' sx={{ width: '1840px' }}>
    <AppBar position="static" sx={{bgcolor: '#1A5092'}}>
      <Toolbar>
        <Typography
          component="div"
          sx={{ fontFamily: '-apple-system', fontStyle: 'italic', fontSize: '25px' ,display: { xs: 'none', sm: 'block' } }}
        >
          CarrierCompass
        </Typography>
        <Box paddingLeft='7rem'>
        <List disablePadding component={Box} display="flex">  
          
            <NavListComponent to={''} name={'Home'}/>
         {user &&  
         <>
            <NavListComponent to={'user'} name={'Dashboard'}/>
         </>
         }
            <NavListComponent to={''} name={'Help'}/>
         {!user &&  
           <>
            <NavListComponent to={'reg'} name={'Register'}/>
            <NavListComponent to={'login'} name={'Login'}/>
            </>   
          }
          <Box>
          </Box>
        </List>
        </Box>
         {user && <Typography
            component="div"
            sx={{ paddingLeft: '3rem', fontFamily: '-apple-system', fontSize: '21px' ,display: { xs: 'none', sm: 'block' } }}
          >
            Welcome Back {name}
          </Typography>}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

        {user &&
          <>
          <Button onClick={handelClick} sx={{color: 'white', width: '7rem' }}>Logout</Button>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={3} color="primary">
              <MailIcon sx={{ fontSize: 32 }} color="action" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
          >
            <Badge badgeContent={17} color="primary">
               <NotificationsNoneIcon sx={{ fontSize: 32 }} color="action" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
          >
            <AccountCircle sx={{ fontSize: 32 }}/>
          </IconButton>
          </>  
        }
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
         
          <IconButton
            size="large"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
         
        </Box>
      </Toolbar>
    </AppBar>
   
  </Box>
  )
}

export default UserNavBar