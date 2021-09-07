import { createContext, useReducer } from 'react'

import { todoReducer } from '../reducers/todoReducer'

export const TodoContext = createContext()

const tempTodos = [
  {id: 1, task: `Walk Dog`, done: false},
  {id: 2, task: `Feed Cat`, done: false},
  {id: 3, task: `Make soup`, done: false},
  {id: 4, task: `Learn JS`, done: true}
]

const TodoContextProvider = props => {

  const [todos, dispatch] = useReducer(todoReducer, tempTodos)

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
