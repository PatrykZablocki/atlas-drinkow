import { Button, Card, CardContent, CardMedia, CircularProgress, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatchApp } from '../../store/appSlice'
import { GetDrink } from '../../utils/types'

type Props = {
  drink: GetDrink
  moderator?: boolean
  disable?: boolean
}

export const DrinkCard = ({ drink, moderator, disable }: Props): JSX.Element => {
  const { acceptDrink, removeDrink } = useDispatchApp()

  return (
    <Card
      sx={{
        whiteSpace: 'pre-line',
        boxShadow: 3,
      }}
    >
      <Grid
        container
        position="relative"
        sx={{
          opacity: disable ? 0.2 : 1,
        }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <CardMedia
            image={drink.imageUrl}
            title={drink.name}
            sx={{ width: '100%', minHeight: '300px', height: '100%' }}
          />
        </Grid>
        <Grid item xs pb={2}>
          <CardContent>
            <Typography sx={{ fontSize: '3rem', lineHeight: '1.2' }}>{drink.name}</Typography>
            <Divider />
            <Typography mt={1}>{drink.description}</Typography>

            <Divider textAlign="left" sx={{ mt: 10 }}>
              <Typography variant="h6">Składniki:</Typography>
            </Divider>
            <Typography mt={1}>{drink.ingredients}</Typography>

            <Divider textAlign="left" sx={{ mt: 8 }}>
              <Typography variant="h6">Sposób przygotowania:</Typography>
            </Divider>
            <Typography my={1}>{drink.instructions}</Typography>
          </CardContent>
        </Grid>
        {disable && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <CircularProgress size={100} />
          </Box>
        )}
      </Grid>

      {moderator && (
        <>
          <Divider />
          <Box
            py={2}
            display="grid"
            rowGap={2}
            columnGap={5}
            sx={{ gridTemplateColumns: { sm: '1fr 1fr' }, px: { xs: 2, sm: 4, md: 8, lg: 12 } }}
          >
            <Button
              disabled={disable}
              variant="contained"
              disableElevation
              color="primary"
              onClick={() => acceptDrink(drink._id)}
            >
              Akceptuj
            </Button>
            <Button
              disabled={disable}
              variant="contained"
              disableElevation
              color="secondary"
              onClick={() => removeDrink(drink._id)}
            >
              Usuń
            </Button>
          </Box>
        </>
      )}
    </Card>
  )
}

DrinkCard.defaultProps = { moderator: false, disable: false }
