import { Auth0ContextInterface, LogoutOptions, PopupConfigOptions, PopupLoginOptions, User } from '@auth0/auth0-react'
import { ReactNode } from 'react'

export type GetDrink = {
  _id: string
  name: string
  description: string
  imageUrl: string
  ingredients: string
  instructions: string
}

export type PostDrink = Omit<GetDrink, '_id'>

type DrinksState = {
  data: GetDrink[]
  isLoading: boolean
}

type NotificationType = 'error' | 'warning' | 'info' | 'success'

export type NotificationState = {
  message: string
  type: null | NotificationType
  open: boolean
}

type ModeratorRequestState = {
  drinkId: string | null
}

export type AppSliceState = {
  drinks: DrinksState
  drinksToCheck: DrinksState
  notification: NotificationState
  moderatorRequest: ModeratorRequestState
}

export type AddDrinkProps = {
  drink: PostDrink
  onSuccess: () => void
  onFail: () => void
}

export type MenuLinksType = {
  text: string
  url: string
  icon: ReactNode
}

export type Auth0Type = Auth0ContextInterface<User>
