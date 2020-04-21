import React, { Component } from 'react'
import { View, Text, Fragment } from 'react-native'
import { connect } from 'react-redux'

class ViewB extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      lastUpdated,
      error,
      account,
      toDoList
    } = this.props
    return (
      <View style={{ padding: 12, height: '30%'}}>
        <Text>{!!error && `Error: ${error}`}</Text>
        <Text>The List:</Text>
        <View style={{ padding: 12 }}>
          {toDoList.map((item, index) => (
            <View>
              <Text>{index + 1}: {item.title}</Text>
            </View>
          ))}
        </View>
        <Text>Last Updated: {lastUpdated}</Text>
        <Text>Account: {JSON.stringify(account)}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lastUpdated: state.lastUpdated,
    error: state.error,
    account: state.account,
    toDoList: state.toDoList
  }
}

export default connect(mapStateToProps)(ViewB)
