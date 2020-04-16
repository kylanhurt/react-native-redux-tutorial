import { dispatch } from 'redux'

export const clearToDoList = () => {
  return {
    type: 'CLEAR_TO_DO_LIST'
  }
}

// thunk
export const fetchToDoList = () => async (dispatch, getState) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()
    dispatch({
      type: 'TO_DO_LIST',
      data
    })
  } catch (e) {
    console.log('Error fetching to do list')
  }
}