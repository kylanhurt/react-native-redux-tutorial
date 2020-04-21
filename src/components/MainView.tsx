import React, { Component } from 'react'
import { View } from 'react-native'
import ViewA from './ViewA'
import ViewB from './ViewB'

class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: []
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: '#aaa', width: '100%'}}>
        <ViewA />
        <ViewB toDoList={this.state.toDoList}/>
      </View>
    )
  }
}

export default MainView