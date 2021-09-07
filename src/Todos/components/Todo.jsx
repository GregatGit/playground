import { useContext } from 'react'

import { TodoContext } from '../context/TodoContext'
import { DELETE_TODO, TOGGLE_TODO } from '../reducers/todoReducer'

import { TodoLi } from './Todo.Styled'


const Todo = ({ todo : { task, id, done } }) => {
  const { dispatch } = useContext(TodoContext)

  function handleDeleteClick() {
    dispatch({type: DELETE_TODO, payload: id})
  }
  
  function handleToggleClick() {
    dispatch({type: TOGGLE_TODO, payload: { id, done: !done}})
  }

	return (
		<TodoLi done={done}>
      {
        done ? (
          <>
            <span className="text">{task}</span>
            <span><button onClick={handleToggleClick}>➰</button></span>
          </>
        ) :
        (
          <>
            <span>{task}</span>
            <span><button onClick={handleToggleClick}>✔</button></span>
          </>
        )
      }
			<span>
				<button onClick={handleDeleteClick}>❌</button>
			</span>
		</TodoLi>
	)
}

export default Todo
