

export const fetchToDoList = () => async (dispatch, getState) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json()
    dispatch({
      type: 'TO_DO_LIST',
      data
    })
  } catch {
    console.log('Error fetching to do list')
  }
}