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
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
      const result = await response.json()
      this.props.onLogin(result.slice(0, 6))
    } catch (e) {
      this.props.onError('There was an error!')
    }
  }

  render() {

    return (
      <View>
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
    onLogout: () => dispatch({ type: 'LOGOUT' }),
    onLogin: (toDoList) => {
      dispatch({ type: 'LOGIN', username: 'My Username', toDoList })
    },
    onError: (error) => dispatch({ type: 'ERROR', error })
  }
}

export default connect(null, mapDispatchToProps)(ViewA)