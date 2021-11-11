import { Menu } from '@mui/icons-material'
import { AppBar, Button, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { toHome } from '../../routes/Routes'
import logo from '../../utils/images/logo.png'
import { MenuLinksMain } from '../../utils/MenuLinks'
import { Auth0Type } from '../../utils/types'
import { MenuActionButtons } from './MenuActionButtons'

export const toolbarHeight = { xs: '56px', sm: '64px' }

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  pathname: string
  auth0: Auth0Type
}

export const Navbar = ({ open, setOpen, pathname, auth0 }: Props) => {
  const { push } = useHistory()

  return (
    <AppBar
      color="inherit"
      elevation={0}
      sx={{
        position: { lg: 'relative' },
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#F0F2F5',
      }}
    >
      <Container>
        <Toolbar
          sx={{
            justifyContent: { xs: 'space-between' },
            px: { xs: 0 },
            height: toolbarHeight,
          }}
        >
          <Button
            startIcon={<img height={36} src={logo} alt="logo" />}
            disableRipple
            sx={{ '&:hover': { background: 'none' } }}
            onClick={() => push(toHome)}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>Atlas drinków</Typography>
          </Button>
          <IconButton
            color="primary"
            size="large"
            aria-label="menu"
            onClick={() => setOpen(!open)}
            sx={{ display: { lg: 'none' } }}
          >
            <Menu />
          </IconButton>

          <Stack direction="row" spacing={5} display={{ xs: 'none', lg: 'flex' }}>
            {MenuLinksMain.map((link) => (
              <Button
                key={`navbar-menu-link-${link.text}`}
                color={link.url === pathname ? 'primary' : 'inherit'}
                sx={{ fontWeight: 'bold', textTransform: 'none' }}
                onClick={() => push(link.url)}
              >
                {link.text}
              </Button>
            ))}
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} display={{ xs: 'none', lg: 'flex' }}>
            <MenuActionButtons auth0={auth0} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
