import { combineReducers } from "redux"

export const initialState = {
  toDoList: [],
  account: null,
  error: '',
  lastUpdated: ''
}

const toDoList = (state = initialState.toDoList, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const list = [...state]
      list.push(action.data)
      return list
    }
    case 'REMOVE_ITEM': {
      const list = [...state]
      const removedItem = list.pop()
      return list
    }
    case 'RESET_ITEMS': {
      return []
    }
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
    case 'ADD_ITEM':
    case 'REMOVE_ITEM':
    case 'RESET_ITEMS':
    case 'LOGIN':
      const date = new Date()
      return date.toUTCString()
    default:
      return state
  }
}

const account = (state = initialState.account, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        myAccount: 'something'
      }
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

const error = (state = initialState.error, action) => {
  switch (action.type) {
    case 'ERROR':
      return state
    case 'LOGOUT':
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