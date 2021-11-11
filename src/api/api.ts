import { PayloadAction } from '@reduxjs/toolkit'
import { AddDrinkProps } from '../utils/types'
import { axios } from './axios'

const url = '/drinki'

export const getDrinks = ({ payload }: PayloadAction<string>) => {
  const params = {
    q: payload
      ? { accepted: true, $or: [{ name: { $regex: payload } }, { ingredients: { $regex: payload } }] }
      : { accepted: true },
  }

  return axios.get(url, { params })
}

export const getDrinksToCheck = () => axios.get(url, { params: { q: { accepted: false } } })

export const postDrink = ({ payload }: PayloadAction<AddDrinkProps>) =>
  axios.post(url, { ...payload.drink, accepted: false })

export const deleteDrink = ({ payload }: PayloadAction<string>) => axios.delete(`${url}/${payload}`)

export const patchDrink = ({ payload }: PayloadAction<string>) => axios.patch(`${url}/${payload}`, { accepted: true })
