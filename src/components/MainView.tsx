import React, { Component } from 'react'
import { View } from 'react-native'
import ViewA from './ViewA'
import ViewB from './ViewB'

class MainView extends Component {
render() {
    return (
      <View style={{ backgroundColor: '#aaa', width: '100%'}}>
        <ViewA />
        <ViewB />
      </View>
    )
  }
}

export default MainView