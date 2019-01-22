import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import { connect } from 'react-redux'

class RoomScreen extends Component {
  static navigationOptions = {
    title: 'Room',
  }

  render() {
    return (
      <View>
        <Text>Room Screen</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  state: state.nav,
})

export default connect(mapStateToProps)(RoomScreen)
