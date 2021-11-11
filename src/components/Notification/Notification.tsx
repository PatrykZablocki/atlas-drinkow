import { Alert, IconButton, Snackbar } from '@mui/material'
import { Close } from '@mui/icons-material'
import React from 'react'

import { useDispatchApp, useSelectNotification } from '../../store/appSlice'

export const Notification = (): JSX.Element => {
  const { message, type, open } = useSelectNotification()
  const { setNotification } = useDispatchApp()

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setNotification({ message, type, open: false })
  }

  const closeButton = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <Close fontSize="small" />
    </IconButton>
  )

  return (
    <Snackbar
      autoHideDuration={4000}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <Alert severity={type || undefined} variant="filled" onClose={handleClose} action={closeButton}>
        {message}
      </Alert>
    </Snackbar>
  )
}
