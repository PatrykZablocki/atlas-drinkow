import { Card, CardContent, Divider, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

export const DrinkCardSmallSkeleton = (): JSX.Element => {
  return (
    <Card sx={{ height: '100%' }}>
      <Skeleton variant="rectangular" height={160} animation="wave" />

      <CardContent>
        <Typography variant="h5">
          <Skeleton width="60%" />
        </Typography>
        <Divider />
        <Stack pt={1} spacing={1.5}>
          <Skeleton height={10} />
          <Skeleton height={10} />
          <Skeleton height={10} />
        </Stack>
      </CardContent>
    </Card>
  )
}
