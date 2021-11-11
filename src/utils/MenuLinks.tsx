import React from 'react'
import { Home, Download, LocalBar } from '@mui/icons-material'
import { toAddDrink, toDownload, toHome } from '../routes/Routes'
import { MenuLinksType } from './types'

export const MenuLinksMain: MenuLinksType[] = [
  {
    text: 'Strona główna',
    url: toHome,
    icon: <Home />,
  },
  {
    text: 'Dodaj drink',
    url: toAddDrink,
    icon: <LocalBar />,
  },
  {
    text: 'Pobierz aplikację',
    url: toDownload,
    icon: <Download />,
  },
]
