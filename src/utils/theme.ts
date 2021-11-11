import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material'

declare module '@mui/material' {
  interface Palette {
    gradient: PaletteColor
  }
  interface PaletteOptions {
    gradient: PaletteColorOptions
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    gradient: {
      main: 'linear-gradient(90deg, #8A1FAD 0%, #6666FF 100%)',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: '1.5',
      letterSpacing: '0.01em',
    },
    h2: {
      fontSize: '1.625rem',
      fontWeight: 700,
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.625rem',
      fontWeight: 700,
      lineHeight: '1.5',
      letterSpacing: '0.01em',
    },
    h4: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.125rem',
    },
  },
})
