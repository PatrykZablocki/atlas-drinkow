import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { AddDrinkForm } from './components/AddDrinkForm'
import bgImage from '../../utils/images/whisky-drink-background.jpg'

export const AddDrinkPage = (): JSX.Element => {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={false}
          sm={2}
          md={4}
          lg={6}
          xl={7}
          sx={{
            height: '100vh',
            backgroundColor: 'primary.dark',
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '75% center',
            position: 'sticky',
            top: 0,
          }}
        />
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          xl={5}
          px={{ xs: 2, sm: 3 }}
          py={5}
          maxWidth={800}
          component={Paper}
          elevation={8}
        >
          <Box maxWidth={680} mx="auto">
            <Box textAlign="center" mb={4}>
              <Typography
                color="primary"
                sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem' }, fontWeight: 'medium' }}
              >
                Wzmocnij naszą bazę drinków!
              </Typography>
              <Typography fontSize={{ xs: '1rem', sm: '1.1rem' }}>Dodaj pomysł na wspianiały drink.</Typography>
            </Box>
            <AddDrinkForm />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
