import { UPDATE_VERSION_SUCCESS, UPDATE_VERSION_FAILED } from './actionTypes'

const initialState = {
  version: 1,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VERSION_SUCCESS: {
      console.log('update version success')
      return { ...state, version: state.version + 1 }
    }
    case UPDATE_VERSION_FAILED: {
      console.log('update version failed')
      return state
    }
    default: {
      return state
    }
  }
}
