import { UPDATE_VERSION } from './actionTypes'

const initialState = {
  version: 1,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VERSION: {
      return { ...state, version: state.version + 1 }
    }
    default: {
      return state
    }
  }
}
