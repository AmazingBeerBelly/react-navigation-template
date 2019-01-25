import { put } from 'redux-saga/effects'

import { UPDATE_VERSION_SUCCESS, UPDATE_VERSION_FAILED } from './actionTypes'

export function* updateRequest() {
  try {
    yield put({ type: UPDATE_VERSION_SUCCESS })
  } catch (error) {
    yield put({ type: UPDATE_VERSION_FAILED })
  }
}
