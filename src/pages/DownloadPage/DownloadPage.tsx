import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { toolbarHeight } from '../../layout/components/Navbar'
import { toHome } from '../../routes/Routes'
import image from '../../utils/images/engineer.svg'

export const DownloadPage = (): JSX.Element => {
  const { push } = useHistory()

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: `calc(100vh - ${toolbarHeight.sm})`,
        display: 'grid',
        placeContent: 'center',
        placeItems: 'center',
        py: 3,
      }}
    >
      <img height={240} width={330} src={image} alt="engineer" />
      <Box sx={{ display: 'grid', justifyItems: 'center', rowGap: 2, p: 3 }}>
        <Typography textAlign="center" sx={{ fontSize: '16px', fontWeight: 'medium' }}>
          Strona w budowie.
          <br /> Pobieranie aplikacji będzie dostępne wkrótce.
        </Typography>
        <Button onClick={() => push(toHome)}>Powrót na stronę główną</Button>
      </Box>
    </Container>
  )
}
