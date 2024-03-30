import { ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    to: string,
    name: string
}

function NavListComponent({to , name}: Props) {
  return (
        <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
          >
             {/* <Link to={`/${to}`}>
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={name}
            />
            </Link> */}
        </ListItem>
  )
}

export default NavListComponent