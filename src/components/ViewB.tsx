import React, { Component } from 'react'
import { View, Text, Fragment } from 'react-native'

class ViewB extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { toDoList } = this.props
    return (
      <View style={{ height: '30%'}}>
        <Text>The List:</Text>
        <View>
          {toDoList.map(item => (
            <View>
              <Text>{item.id}: {item.title} is {item.completed}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

export default ViewB
