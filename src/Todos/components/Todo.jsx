import { useContext } from 'react'

import { TodoContext } from '../context/TodoContext'
import { DELETE_TODO, TOGGLE_TODO } from '../reducers/todoReducer'


const Todo = ({ todo : { task, id, done } }) => {
  const { dispatch } = useContext(TodoContext)

  function handleDeleteClick() {
    dispatch({type: DELETE_TODO, payload: id})
  }
  
  function handleToggleClick() {
    dispatch({type: TOGGLE_TODO, payload: { id, done: !done}})
  }

	return (
		<li>
      {
        done ? (
          <>
            <span>{task}</span>
            <span><button onClick={handleToggleClick}>🔄</button></span>
          </>
        ) :
        (
          <>
            <span>{task}</span>
            <span><button onClick={handleToggleClick}>✅</button></span>
          </>
        )
      }
			<span>
				<button onClick={handleDeleteClick}>delete</button>
			</span>
		</li>
	)
}

export default Todo
