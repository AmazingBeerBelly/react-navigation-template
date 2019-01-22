import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { store, AppWithNavigationState } from './Store'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
