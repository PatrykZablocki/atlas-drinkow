import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useHistory } from 'react-router-dom'
import bgImage from '../../utils/images/whisky-drink-background.jpg'
import { toAddDrink } from '../routes/Routes'

export const AddDrinkInfoBox = (): JSX.Element => {
  const { push } = useHistory()

  return (
    <Container sx={{ px: { xs: 0, md: 2 }, my: { md: 2, lg: 4 } }}>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center 90%',
          borderRadius: { md: 3 },
        }}
      >
        <Grid sx={{ color: 'common.white', py: { xs: 5, md: 8, lg: 10 }, px: { xs: 1, md: 3, lg: 4 } }} maxWidth={600}>
          <Typography variant="h4" mb={1}>
            Ciągle poszukujemy nowych wspaniałych pomysłów na drinki
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.95 }}>
            Znasz świetny drink, którego brakuje w naszej bazie? Dodaj go i stań się cześcią naszej społeczności.
          </Typography>
          <Button variant="contained" sx={{ px: 2, mt: 4 }} disableElevation onClick={() => push(toAddDrink)}>
            Formularz dodawania
          </Button>
        </Grid>
      </Box>
    </Container>
  )
}
