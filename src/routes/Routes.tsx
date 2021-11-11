import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AddDrinkPage } from '../pages/AddDrinkPage/AddDrinkPage'
import { DownloadPage } from '../pages/DownloadPage/DownloadPage'
import { DrinkPage } from '../pages/DrinkPage/DrinkPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { ModeratorPage } from '../pages/ModeratorPage/ModeratorPage'

export const toHome = '/'
export const toDrink = '/drink'
export const toDrinkId = `${toDrink}/:id`
export const toAddDrink = '/add-drink'
export const toDownload = '/download'
export const toModeratorPanel = '/moderator-panel'

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path={toDrinkId} component={DrinkPage} />
      <Route path={toAddDrink} component={AddDrinkPage} />
      <Route path={toModeratorPanel} component={ModeratorPage} />
      <Route path={toDownload} component={DownloadPage} />
      <Route path={toHome} component={HomePage} />
      <Redirect to={toHome} />
    </Switch>
  )
}
