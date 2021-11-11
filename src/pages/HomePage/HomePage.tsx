import React, { useEffect, useState } from 'react'
import { Container, Grid, InputBase, Paper, IconButton, Pagination, Box, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Section } from 'react-scroll-section'
import { useDispatchApp, useSelectDrinks } from '../../store/appSlice'
import { DrinkCardSmall } from '../../components/DrinkCard/DrinkCardSmall'
import { GetDrink } from '../../utils/types'
import { Loader } from '../../components/Loader/Loader'
import { HeroSection } from './components/HeroSection'

export const HomePage = (): JSX.Element => {
  const { data, isLoading } = useSelectDrinks()
  const [filter, setFilter] = useState<string>('')
  const [drinks, setDrinks] = useState<GetDrink[]>([])
  const { fetchDrinks } = useDispatchApp()

  const itemsPerPage = 12

  const filterDrinks = () => {
    fetchDrinks(filter)
  }

  useEffect(() => {
    fetchDrinks('')
  }, [])

  useEffect(() => {
    if (!isLoading) setDrinks(data.filter((item, index) => index < itemsPerPage))
  }, [isLoading])

  const handleChange = (page: number) => {
    setDrinks(data.filter((item, index) => index >= itemsPerPage * (page - 1) && index < itemsPerPage * page))
  }

  return (
    <>
      <HeroSection />

      <Section id="drinks">
        <Container sx={{ pt: 8, pb: 1, display: { sm: 'flex' }, alignItems: { sm: 'end' }, columnGap: 2 }}>
          <Box sx={{ mb: { xs: 3, sm: 0 } }}>
            <Typography variant="h3">Propozycje drinków</Typography>
            <Typography>Lista porpozycji na przeróżne drinki z całego świata</Typography>
          </Box>
          <Paper
            elevation={2}
            sx={{
              display: 'flex',
              px: 1,
              width: { xs: '100%', sm: '320px' },
              maxWidth: '100%',
              ml: 'auto',
            }}
          >
            <InputBase
              placeholder="Wyszukaj drink"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              sx={{ flexGrow: 1, m: 1, fontWeight: 500 }}
            />
            <IconButton sx={{ m: 0.5 }} onClick={() => filterDrinks()}>
              <Search />
            </IconButton>
          </Paper>
        </Container>

        <Container sx={{ pt: 3, pb: 6 }}>
          <Loader isLoading={isLoading} itemsCount={drinks.length}>
            <Grid container columnSpacing={3} rowSpacing={6}>
              {drinks.map((drink) => (
                <Grid item key={drink._id} xs={12} sm={6} md={4} lg={3}>
                  <DrinkCardSmall drink={drink} />
                </Grid>
              ))}
            </Grid>
            <Box mt={6} display="grid">
              <Pagination
                color="primary"
                showFirstButton
                showLastButton
                count={Math.ceil(data.length / itemsPerPage)}
                onChange={(_, page) => handleChange(page)}
                sx={{ justifySelf: 'center' }}
              />
            </Box>
          </Loader>
        </Container>
      </Section>
    </>
  )
}
