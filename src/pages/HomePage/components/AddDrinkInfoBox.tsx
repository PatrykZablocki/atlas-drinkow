import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import image from '../../../utils/images/cocktail2.png'
import { toAddDrink } from '../../../routes/Routes'

export const AddDrinkInfoBox = (): JSX.Element => {
  const { push } = useHistory()

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'common.white',
        maxWidth: '900px',
        mx: 'auto',
        textAlign: { xs: 'center', md: 'start' },
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 10 },
        display: { md: 'flex' },
        alignItems: { md: 'center' },
        columnGap: 10,
      }}
    >
      <img height={260} width={156} src={image} alt="mobile app icon" />
      <Box sx={{ letterSpacing: '0.5px', mt: { xs: 5, md: 0 } }}>
        <Typography color="primary" variant="h2" mb={0.5}>
          Zaproponuj drink
        </Typography>
        <Typography mb={6} maxWidth={560} mx="auto">
          Ciągle poszukujemy nowych wspaniałych pomysłów na drinki. Znasz świetny drink, którego brakuje w naszej bazie?
          Dodaj go!
        </Typography>
        <Button variant="contained" sx={{ px: 3 }} onClick={() => push(toAddDrink)}>
          Formularz dodawania
        </Button>
      </Box>
    </Paper>
  )
}
