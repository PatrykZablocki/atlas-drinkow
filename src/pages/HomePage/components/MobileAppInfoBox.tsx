import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Box, Button, Paper, Typography } from '@mui/material'
import mobileSVG from '../../../utils/images/mobile-svg.svg'

export const MobileAppInfoBox = (): JSX.Element => {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'common.white',
        maxWidth: '900px',
        mx: 'auto',
        textAlign: { xs: 'center', md: 'start' },
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 10 },
        display: { md: 'flex' },
        columnGap: 10,
      }}
    >
      <img height={200} src={mobileSVG} alt="mobile app icon" />
      <Box sx={{ letterSpacing: '0.5px', mt: { xs: 5, md: 0 } }}>
        <Typography color="primary" sx={{ fontSize: '26px', textTransform: 'uppercase', fontWeight: 'bold', mb: 1 }}>
          Pobierz aplikację mobilną
        </Typography>
        <Typography mb={6} maxWidth={560} mx="auto">
          Aplikacja mobilna poza możliwością przeglądania i dodawania drinków posiada również{' '}
          <Box component="span" fontWeight="medium">
            kalkulator promili.
          </Box>
        </Typography>
        <Button variant="contained" endIcon={<ArrowDownwardIcon />} sx={{ px: 3 }}>
          Pobierz aplikację
        </Button>
      </Box>
    </Paper>
  )
}
