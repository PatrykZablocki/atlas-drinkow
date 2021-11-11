import { Box, CircularProgress } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isLoading: boolean
  itemsCount: number
}

export const Loader = ({ children, isLoading, itemsCount }: Props): JSX.Element => {
  if (!isLoading && itemsCount) return <>{children}</>

  return (
    <Box display="flex" justifyContent="center" sx={{ my: 4 }}>
      {isLoading ? <CircularProgress size={50} /> : 'no data'}
    </Box>
  )
}
