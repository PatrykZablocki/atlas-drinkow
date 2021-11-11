import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { toDrink } from '../../routes/Routes'
import { GetDrink } from '../../utils/types'

type Props = {
  drink: GetDrink
}

export const DrinkCardSmall = ({ drink }: Props): JSX.Element => {
  const { push } = useHistory()
  const handleClick = () => push(`${toDrink}/${drink._id}`)

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia title={drink.name} image={drink.imageUrl} sx={{ height: '160px' }} />
      </CardActionArea>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5">{drink.name}</Typography>
        <Divider />
        <Typography variant="body2" pt={0.5}>
          {drink.description.length > 100 ? drink.description.substring(0, 100).concat('...') : drink.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, justifyContent: 'end' }}>
        <Button size="small" disableElevation onClick={handleClick}>
          Zobacz szczegóły
        </Button>
      </CardActions>
    </Card>
  )
}
