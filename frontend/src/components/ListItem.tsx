
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
interface Props {
    message: string,
    icon: JSX.Element,
    link: string
}


function ListItemCom({message,icon,link }: Props) {
  const navigate = useNavigate();
  
  const handelClick = () => {
      navigate(`${link}`)
  }
  
  
  return (
   <ListItem disablePadding>
      <ListItemButton onClick={handelClick} >
          <ListItemIcon>
            {icon}
        </ListItemIcon>
        <ListItemText primary={message} />
      </ListItemButton>
    </ListItem>
  )
}

export default ListItemCom