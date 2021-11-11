/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, bindActionCreators, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { AddDrinkProps, AppSliceState, GetDrink, NotificationState, PostDrink } from '../utils/types'

const initialState: AppSliceState = {
  drinks: {
    data: [],
    isLoading: false,
  },
  drinksToCheck: {
    data: [],
    isLoading: false,
  },
  notification: {
    message: '',
    type: null,
    open: false,
  },
  moderatorRequest: {
    drinkId: null,
  },
}

export const appSlice = createSlice({
  initialState,
  name: 'appSlice',
  reducers: {
    // DRINKS
    fetchDrinks: (state: AppSliceState, { payload }: PayloadAction<string>) => {
      state.drinks.isLoading = true
    },
    fetchDrinkSuccess: (state: AppSliceState, { payload }: PayloadAction<GetDrink[]>) => {
      state.drinks.data = payload
      state.drinks.isLoading = false
    },
    fetchDrinksFailed: (state: AppSliceState) => {
      state.drinks.isLoading = false
    },

    fetchDrinksToCheck: (state: AppSliceState) => {
      state.drinksToCheck.isLoading = true
    },
    fetchDrinkToCheckSuccess: (state: AppSliceState, { payload }: PayloadAction<GetDrink[]>) => {
      state.drinksToCheck.data = payload
      state.drinksToCheck.isLoading = false
    },
    fetchDrinksToCheckFailed: (state: AppSliceState) => {
      state.drinksToCheck.isLoading = false
    },

    addDrink: (state: AppSliceState, { payload }: PayloadAction<AddDrinkProps>) => {},

    // DRINKS - MODERATOR PANEL
    removeDrink: (state: AppSliceState, { payload }: PayloadAction<string>) => {
      state.moderatorRequest.drinkId = payload
    },
    removeDrinkSuccess: (state: AppSliceState, { payload }: PayloadAction<string>) => {
      state.drinksToCheck.data = state.drinksToCheck.data.filter((drink) => drink._id !== payload)
      state.moderatorRequest.drinkId = null
    },
    removeDrinkFailed: (state: AppSliceState) => {
      state.moderatorRequest.drinkId = null
    },

    acceptDrink: (state: AppSliceState, { payload }: PayloadAction<string>) => {
      state.moderatorRequest.drinkId = payload
    },
    acceptDrinkSuccess: (state: AppSliceState, { payload }: PayloadAction<string>) => {
      state.drinksToCheck.data = state.drinksToCheck.data.filter((drink) => drink._id !== payload)
      state.moderatorRequest.drinkId = null
    },
    acceptDrinkFailed: (state: AppSliceState) => {
      state.moderatorRequest.drinkId = null
    },

    // NOTIFICATIONS
    setNotification: (state: AppSliceState, { payload }: PayloadAction<NotificationState>) => {
      state.notification.message = payload.message
      state.notification.type = payload.type
      state.notification.open = payload.open
    },
  },
})

export const {
  fetchDrinks,
  fetchDrinkSuccess,
  fetchDrinksFailed,
  fetchDrinksToCheck,
  fetchDrinkToCheckSuccess,
  fetchDrinksToCheckFailed,
  addDrink,
  removeDrink,
  removeDrinkFailed,
  removeDrinkSuccess,
  acceptDrink,
  acceptDrinkFailed,
  acceptDrinkSuccess,
  setNotification,
} = appSlice.actions

export const useSelectDrinks = () => useSelector((state: AppSliceState) => state.drinks)
export const useSelectDrinksToCheck = () => useSelector((state: AppSliceState) => state.drinksToCheck)
export const useSelectNotification = () => useSelector((state: AppSliceState) => state.notification)
export const useSelectModeratorRequest = () => useSelector((state: AppSliceState) => state.moderatorRequest)

export const useDispatchApp = () => {
  const { actions } = appSlice
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export default appSlice.reducer
