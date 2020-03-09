import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

class ViewA extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ height: '30%'}}>
        <TouchableOpacity onPress={this.props.onLoadToDoList}>
          <Text>Load To Do List</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ViewA