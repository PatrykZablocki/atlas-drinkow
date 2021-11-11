import { useAuth0 } from '@auth0/auth0-react'
import { Box } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { DrawerMenu } from './components/DrawerMenu'
import { Navbar, toolbarHeight } from './components/Navbar'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const auth0 = useAuth0()

  return (
    <>
      <Navbar open={open} setOpen={setOpen} pathname={pathname} auth0={auth0} />
      <DrawerMenu open={open} setOpen={setOpen} pathname={pathname} auth0={auth0} />
      <Box sx={{ mt: { ...toolbarHeight, lg: 0 } }}>{children}</Box>
    </>
  )
}
