import { combineReducers } from "redux"

export const initialState = {
  toDoList: [],
  account: null,
  error: '',
  lastUpdated: ''
}

const toDoList = (state = initialState.toDoList, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return action.data.toDoList
    }
    case 'LOGOUT': {
      return []
    }
    default:
      return state
  }
}

const lastUpdated = (state = initialState.lastUpdated, action) => {
  switch (action.type) {
    case 'LOGIN':
      const date = new Date()
      return date.toUTCString()
    case 'LOGOUT':
      return ''
    default:
      return state
  }
}

const account = (state = initialState.account, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data.username
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

const error = (state = initialState.error, action) => {
  switch (action.type) {
    case 'ERROR':
      return action.data
    case 'LOGOUT':
      return ''
    case 'LOGIN':
      return ''
    default:
      return state
  }
}

export default combineReducers({
  toDoList,
  account,
  error,
  lastUpdated
})