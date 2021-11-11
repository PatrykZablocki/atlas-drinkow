import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import { DrinkCard } from '../../components/DrinkCard/DrinkCard'
import { toolbarHeight } from '../../layout/components/Navbar'
import { useSelectDrinks } from '../../store/appSlice'

export const DrinkPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const { data } = useSelectDrinks()
  const drink = data.find((item) => item._id === id)

  return (
    <Box sx={{ background: (theme) => theme.palette.gradient.main }}>
      <Container
        sx={{
          py: 2,
          minHeight: `calc(100vh - ${toolbarHeight.sm})`,
          display: 'grid',
          alignItems: 'center',
        }}
      >
        <Box mb={toolbarHeight.sm}>{drink ? <DrinkCard drink={drink} /> : 'no data'}</Box>
      </Container>
    </Box>
  )
}
