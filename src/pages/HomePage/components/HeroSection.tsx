import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useScrollSection } from 'react-scroll-section'
import { AddDrinkInfoBox } from './AddDrinkInfoBox'

export const HeroSection = (): JSX.Element => {
  const drinksSection = useScrollSection('drinks')

  return (
    <>
      <Box sx={{ background: (theme) => theme.palette.gradient.main, pt: 20, pb: 50 }}>
        <Container>
          <Box
            color="common.white"
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography variant="h1">Atlas drinków</Typography>
            <Typography sx={{ mb: 4 }}>Znajdziesz tu przepisy na świetne drinki</Typography>
            <Button color="inherit" variant="outlined" onClick={drinksSection.onClick}>
              Przeglądaj
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        mt={-38}
        px={2}
        sx={{
          background: { xs: 'linear-gradient(90deg, #8A1FAD 0%, #6666FF 100%)', md: 'none' },
          pb: { xs: 5, md: 15 },
        }}
      >
        <AddDrinkInfoBox />
      </Box>
    </>
  )
}
