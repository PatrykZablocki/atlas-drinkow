import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { DrinkCard } from '../../../components/DrinkCard/DrinkCard'
import { Loader } from '../../../components/Loader/Loader'
import { useDispatchApp, useSelectDrinksToCheck, useSelectModeratorRequest } from '../../../store/appSlice'

export const ModeratorPanel = (): JSX.Element => {
  const { data, isLoading } = useSelectDrinksToCheck()
  const { fetchDrinksToCheck } = useDispatchApp()
  const { drinkId } = useSelectModeratorRequest()

  useEffect(() => {
    fetchDrinksToCheck()
  }, [])

  return (
    <Container sx={{ pt: 4, pb: 8 }}>
      <Loader isLoading={isLoading} itemsCount={data.length}>
        <Box display="grid" rowGap={10}>
          {data.map((drink) => (
            <DrinkCard key={drink._id} drink={drink} moderator disable={drink._id === drinkId} />
          ))}
        </Box>
      </Loader>
    </Container>
  )
}
