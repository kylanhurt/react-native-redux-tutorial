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

  onLoadToDoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const result = await response.json()
    this.setState({
      toDoList: result.slice(0, 20)
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: '#aaa', width: '100%'}}>
        <ViewA onLoadToDoList={this.onLoadToDoList}/>
        <ViewB toDoList={this.state.toDoList}/>
      </View>
    )
  }
}

export default MainView