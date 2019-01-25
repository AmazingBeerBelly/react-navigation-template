import React, { Component } from 'react'
import {
  Button,
  ScrollView,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import { UPDATE_REQUEST } from '../actionTypes'

class MyScreen extends Component {
  static navigationOptions = {
    title: 'My',
    headerLeft: (
      <Button
        onPress={() => console.log('This is a button!')}
        title="Info"
        color="#aaa"
      />
    ),
  }

  render() {
    return (
      <ScrollView>
        <Text>{this.props.my.version}</Text>
        <Button
          onPress={() => this.props.dispatch({ type: UPDATE_REQUEST })}
          title="update"
          color="#aaa"
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  state: state.nav,
  my: state.my,
})

export default connect(mapStateToProps)(MyScreen)
