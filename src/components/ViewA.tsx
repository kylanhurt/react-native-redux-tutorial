import React, { Component, StyleSheet } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import { TouchableOpacity, Text, View } from 'react-native'
import { fetchToDoList } from '../actions/toDoActions'

const styles = {
  borderWidth: 1,
  borderColor: 'black',
  padding: 12
}

class ViewA extends Component {
  constructor(props) {
    super(props)
  }

  onLoadToDoList = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const result = await response.json()
    this.props.onLogin(result.slice(0, 6))
  }

  render() {

    return (
      <View>
        <TouchableOpacity style={styles} onPress={this.props.onAddItem}>
          <Text>Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles} onPress={this.props.onRemoveItem}>
          <Text>Remove Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles} onPress={this.props.onResetToDoList}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles} onPress={this.onLoadToDoList}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles} onPress={this.props.onLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: () => dispatch({ type: 'ADD_ITEM', data: { title: 'item' } }),
    onRemoveItem: () => dispatch({ type: 'REMOVE_ITEM' }),
    onResetToDoList: () => dispatch({ type: 'RESET_ITEMS' }),
    onLogout: () => dispatch({ type: 'LOGOUT' }),
    onLogin: (toDoList) => {
      dispatch({ type: 'LOGIN', data: { username: 'My Username', toDoList }})
    }
  }
}

export default connect(null, mapDispatchToProps)(ViewA)