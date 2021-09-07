import { useContext } from 'react'
import List from './components/List'


import { TodoContext } from './context/TodoContext'

const Todos = () => {
  const { todos } = useContext(TodoContext)
  return (
    <div>
      <h2>Todo List</h2>
      <sub>A basic todo list using hooks and context</sub>
      {todos && <List todos={todos} />}
    </div>
  )
}

export default Todos
