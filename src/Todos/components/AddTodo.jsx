import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoContext } from '../context/TodoContext'
import { ADD_TODO } from '../reducers/todoReducer'

const AddTodo = () => {
	const { dispatch } = useContext(TodoContext)
	const [task, setTask] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
    const todo = {
      task,
      done: false,
      id: uuidv4()
    }
    dispatch({type: ADD_TODO, payload: todo})
    setTask('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				minLength={3}
				maxLength={30}
				value={task}
				name="task"
				placeholder="add new todo here"
				onChange={(e) => setTask(e.target.value)}
			/>
			<button onClick={handleSubmit} type="submit">Add</button>
		</form>
	)
}

export default AddTodo
