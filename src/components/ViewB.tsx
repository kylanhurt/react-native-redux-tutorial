import React, { Component } from 'react'
import { View, Text, Fragment } from 'react-native'
import { connect } from 'react-redux'
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

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList
  }
}

export default connect(mapStateToProps)(ViewB)
