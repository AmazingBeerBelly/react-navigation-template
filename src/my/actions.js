import { UPDATE_VERSION } from './actionTypes'

export function updateVersion() {
  return (dispatch) => {
    dispatch({
      type: UPDATE_VERSION,
    })
  }
}
