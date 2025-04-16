import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todos/todosSlice'
import counterReducer from './counter/counterSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
  },
})