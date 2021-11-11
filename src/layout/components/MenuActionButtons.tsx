import { Button, Divider } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { toModeratorPanel } from '../../routes/Routes'
import { Auth0Type } from '../../utils/types'

type Props = {
  auth0: Auth0Type
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  divider?: boolean
}

export const MenuActionButtons = ({
  setOpen,
  auth0: { isAuthenticated, loginWithPopup, logout },
  divider,
}: Props): JSX.Element => {
  const { push } = useHistory()
  return (
    <>
      {divider && <Divider />}
      <Button
        disabled={!isAuthenticated}
        onClick={() => {
          push(toModeratorPanel)
          if (setOpen) setOpen(false)
        }}
      >
        Panel moderatora
      </Button>
      {divider && <Divider />}
      {isAuthenticated ? (
        <Button onClick={() => logout({ returnTo: window.location.origin })}>Wyloguj</Button>
      ) : (
        <Button onClick={() => loginWithPopup()}>Zaloguj</Button>
      )}
      {divider && <Divider />}
    </>
  )
}

MenuActionButtons.defaultProps = { setOpen: undefined, divider: false }
