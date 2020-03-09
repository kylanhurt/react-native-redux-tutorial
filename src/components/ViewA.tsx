import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import { TouchableOpacity, Text, View } from 'react-native'
import { fetchToDoList } from '../actions/toDoActions'

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

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadToDoList: () => dispatch(fetchToDoList())
  }
}

export default connect(null, mapDispatchToProps)(ViewA)