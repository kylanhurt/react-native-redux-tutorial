import { combineReducers } from "redux"

export const initialState = []

export const toDoList = (state = initialState, action) => {
  switch (action.type) {
    case 'TO_DO_LIST': {
      return action.data
    }

    default:
      return state
  }
}

export default combineReducers({
  toDoList
})