import { Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { toolbarHeight } from '../../../layout/components/Navbar'
import image from '../../../utils/images/secure.svg'

export const ModeratorPanelNoAccess = (): JSX.Element => {
  const { loginWithPopup } = useAuth0()

  return (
    <Container
      maxWidth="sm"
      sx={{ py: 5, minHeight: `calc(100vh - ${toolbarHeight.sm})`, display: 'grid', placeContent: 'center' }}
    >
      <Paper
        sx={{
          display: 'grid',
          rowGap: 1,
          justifyItems: 'center',
          p: 3,
          mb: toolbarHeight.sm,
        }}
      >
        <img height={180} src={image} alt="secure" />
        <Typography variant="h6" align="center" mt={3}>
          Dostęp do tego panelu mają tylko moderatorzy
        </Typography>
        <Button sx={{ px: 3 }} onClick={() => loginWithPopup()}>
          Zaloguj
        </Button>
      </Paper>
    </Container>
  )
}
