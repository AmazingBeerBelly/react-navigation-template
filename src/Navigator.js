import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'

import RoomScreen from './room/views'
import MyScreen from './my/views'

const RoomNavigator = createStackNavigator(
  {
    Room: RoomScreen,
  },
)

const MyNavigator = createStackNavigator(
  {
    My: MyScreen,
  },
)

export const TabNavigator = createBottomTabNavigator(
  {
    Room: RoomNavigator,
    My: MyNavigator,
  },
)

const AppContainer = createAppContainer(TabNavigator)

export default AppContainer
