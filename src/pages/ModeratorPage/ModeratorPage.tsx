import { useAuth0 } from '@auth0/auth0-react'
import { Container, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { ModeratorPanel } from './components/ModeratorPanel'
import { ModeratorPanelNoAccess } from './components/ModeratorPanelNoAccess'

export const ModeratorPage = (): JSX.Element => {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading)
    return (
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Typography variant="h5" align="center" sx={{ mb: 1 }}>
          Weryfikacja...
        </Typography>
        <LinearProgress />
      </Container>
    )

  return isAuthenticated ? <ModeratorPanel /> : <ModeratorPanelNoAccess />
}
