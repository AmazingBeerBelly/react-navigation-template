import { takeEvery } from 'redux-saga/effects'

import { UPDATE_REQUEST } from './src/my/actionTypes'
import { updateRequest } from './src/my/actions'

export default function* rootSaga() {
  yield takeEvery(UPDATE_REQUEST, updateRequest)
}
