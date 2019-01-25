import { connect } from 'react-redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux'
import { AsyncStorage } from 'react-native'
import { persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { createLogger } from 'redux-logger'
import saga from 'redux-saga'

import AppContainer from './src/Navigator'
import myReducer from './src/my/reducer'
import rootSaga from './Sagas'

const navReducer = createNavigationReducer(AppContainer)
const appReducer = combineReducers({
  nav: navReducer,
  my: myReducer,
})

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)

const sagaMiddleware = saga()

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  version: 1,
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, appReducer)
const logger = createLogger({})
const enhancer = compose(applyMiddleware(
  logger,
  middleware,
  sagaMiddleware,
))

const App = reduxifyNavigator(AppContainer, 'root')
const mapStateToProps = state => ({
  state: state.nav,
})

export const AppWithNavigationState = connect(mapStateToProps)(App)

export const store = createStore(
  persistedReducer,
  enhancer,
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
