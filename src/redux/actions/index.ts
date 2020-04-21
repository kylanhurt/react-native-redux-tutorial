import { createActions } from 'reduxsauce'

const actions = {
  updateToDoList: ['toDoList'],
  login: ['username', 'toDoList'],
  logout: [],
  error: ['error']
}

const typesAndCreators = createActions(actions)

export const { Types, Creators } = typesAndCreators