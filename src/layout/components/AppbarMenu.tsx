import { MoreVert } from '@mui/icons-material'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'
import { toModeratorPanel } from '../../routes/Routes'

export const AppbarMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { loginWithPopup, logout, isAuthenticated, isLoading } = useAuth0()
  const { push } = useHistory()

  return (
    <>
      <IconButton aria-controls="appBarMenu" aria-haspopup="true" onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MoreVert sx={{ color: 'common.white' }} />
      </IconButton>
      {!isLoading && (
        <Menu
          id="appBarMenu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          sx={{
            '& .MuiMenu-paper': {
              minWidth: '120px',
            },
          }}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
        >
          {isAuthenticated ? (
            <Box>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null)
                  push(toModeratorPanel)
                }}
              >
                Panel moderatora
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setAnchorEl(null)
                  logout({ returnTo: window.location.origin })
                }}
              >
                Wyloguj
              </MenuItem>
            </Box>
          ) : (
            <MenuItem
              onClick={() => {
                setAnchorEl(null)
                loginWithPopup()
              }}
            >
              Zaloguj
            </MenuItem>
          )}
        </Menu>
      )}
    </>
  )
}
