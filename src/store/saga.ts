import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeLatest } from 'redux-saga/effects'
import { deleteDrink, getDrinks, getDrinksToCheck, patchDrink, postDrink } from '../api/api'
import { AddDrinkProps } from '../utils/types'
import {
  acceptDrink,
  acceptDrinkFailed,
  acceptDrinkSuccess,
  addDrink,
  fetchDrinks,
  fetchDrinksFailed,
  fetchDrinksToCheck,
  fetchDrinksToCheckFailed,
  fetchDrinkSuccess,
  fetchDrinkToCheckSuccess,
  removeDrink,
  removeDrinkFailed,
  removeDrinkSuccess,
  setNotification,
} from './appSlice'

function* workerFetchDrinks(action: PayloadAction<string>) {
  try {
    const { data } = yield getDrinks(action)
    yield put(fetchDrinkSuccess(data))
  } catch (e) {
    yield console.log(String(e))
    yield put(fetchDrinksFailed())
  }
}

function* workerFetchDrinksToCheck() {
  try {
    const { data } = yield getDrinksToCheck()
    yield put(fetchDrinkToCheckSuccess(data))
  } catch (e) {
    yield console.log(String(e))
    yield put(fetchDrinksToCheckFailed())
  }
}

function* workerAddDrink(action: PayloadAction<AddDrinkProps>) {
  try {
    yield postDrink(action)
    yield put(
      setNotification({
        open: true,
        type: 'success',
        message: 'Twój przepis został dodany do kolejki i czeka na akceptację przez moderatora.',
      })
    )
    yield action.payload.onSuccess()
  } catch (e) {
    yield console.log(String(e))
    yield put(
      setNotification({
        open: true,
        type: 'error',
        message: 'Niestety nie udało się dodać twojego przepisu.',
      })
    )
    yield action.payload.onFail()
  }
}

function* workerRemoveDrink(action: PayloadAction<string>) {
  try {
    yield deleteDrink(action)
    yield put(removeDrinkSuccess(action.payload))
    yield put(
      setNotification({
        open: true,
        type: 'success',
        message: 'Przepis został usunięty.',
      })
    )
  } catch (e) {
    yield console.log(String(e))
    yield put(removeDrinkFailed())
    yield put(
      setNotification({
        open: true,
        type: 'error',
        message: 'Usuwanie przepisu zakończone niepowodzeniem.',
      })
    )
  }
}

function* workerAcceptDrink(action: PayloadAction<string>) {
  try {
    yield patchDrink(action)
    yield put(acceptDrinkSuccess(action.payload))
    yield put(
      setNotification({
        open: true,
        type: 'success',
        message: 'Przepis został zaakceptowany.',
      })
    )
  } catch (e) {
    yield console.log(String(e))
    yield put(acceptDrinkFailed())
    yield put(
      setNotification({
        open: true,
        type: 'error',
        message: 'Akceptowanie przepisu zakończone niepowodzeniem.',
      })
    )
  }
}

export function* rootSaga() {
  yield takeLatest(fetchDrinks, workerFetchDrinks)
  yield takeLatest(fetchDrinksToCheck, workerFetchDrinksToCheck)
  yield takeLatest(addDrink, workerAddDrink)
  yield takeLatest(removeDrink, workerRemoveDrink)
  yield takeLatest(acceptDrink, workerAcceptDrink)
}
