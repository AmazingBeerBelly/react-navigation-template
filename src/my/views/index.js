import React, { Component } from 'react'
import {
  Button,
  ScrollView,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import { updateVersion } from '../actions'

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
          onPress={() => this.props.dispatchUpdateVersion()}
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

const mapDispatchToProps = dispatch => ({
  dispatchUpdateVersion: () => dispatch(updateVersion()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyScreen)
