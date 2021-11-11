import React from 'react'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { Close } from '@mui/icons-material'
import { MenuLinksMain } from '../../utils/MenuLinks'
import { Auth0Type } from '../../utils/types'
import { MenuActionButtons } from './MenuActionButtons'

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  pathname: string
  auth0: Auth0Type
}

export const DrawerMenu = ({ open, setOpen, pathname, auth0 }: Props): JSX.Element => {
  const { push } = useHistory()

  const handleClick = (url: string) => {
    push(url)
    setOpen(false)
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <IconButton sx={{ mr: 'auto', ml: 1, my: 1 }} onClick={() => setOpen(false)}>
        <Close />
      </IconButton>
      <Divider />
      <Box height={1} display="flex" flexDirection="column" justifyContent="space-between">
        <List>
          {MenuLinksMain.map((link) => (
            <ListItem
              button
              key={`drawer-menu-link-${link.text}`}
              onClick={() => handleClick(link.url)}
              selected={link.url === pathname}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
        <Box
          my={2}
          display="flex"
          flexDirection="column"
          sx={{
            backgroundColor: 'grey.50',
            '& > button': {
              my: 0,
              py: 2,
            },
          }}
        >
          <MenuActionButtons auth0={auth0} setOpen={setOpen} divider />
        </Box>
      </Box>
    </Drawer>
  )
}
