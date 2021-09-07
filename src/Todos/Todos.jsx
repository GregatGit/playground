import { useContext } from 'react'
import List from './components/List'

import { TodosContainer } from './Todos.Styled'

import { TodoContext } from './context/TodoContext'

const Todos = () => {
  const { todos } = useContext(TodoContext)
  return (
    <TodosContainer>
      <h2>Todo List</h2>
      <p>A basic todo list using hooks and context</p>
      {todos && <List todos={todos} />}
    </TodosContainer>
  )
}

export default Todos
