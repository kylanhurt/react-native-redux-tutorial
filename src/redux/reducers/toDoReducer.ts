import { createReducer } from "reduxsauce"

export const INITIAL_STATE = {
  toDoList: [],
  account: null,
  error: '',
  lastUpdated: ''
}

const login = (state, { username, toDoList }) => ({
  ...state,
  toDoList,
  account: username,
  lastUpdated: (new Date()).toUTCString()
})

const logout = (state) => ({
  ...state,
  toDoList: [],
  lastUpdated: '',
  account: null
})

const error = (state, { error }) => ({
  ...state,
  error
})


const ACTION_HANDLERS = {
  'LOGIN': login,
  'LOGOUT': logout,
  'ERROR': error
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)