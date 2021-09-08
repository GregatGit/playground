import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useFormik } from 'formik'

import { TodoContext } from '../context/TodoContext'
import { ADD_TODO } from '../reducers/todoReducer'

import { AddTodoForm } from './AddTodo.Styled'

const AddTodo = () => {
	const formik = useFormik({
		initialValues: {
			task: ''
		},
		onSubmit: (values, {resetForm}) => {
			let word = values.task.trim()
			const todo = {
				task: word,
				done: false,
				id: uuidv4()
			}
			dispatch({type: ADD_TODO, payload: todo})
			resetForm({values: ''})
		}
	})
	const { dispatch } = useContext(TodoContext)
	const [task, setTask] = useState('')

	
	return (
		<AddTodoForm onSubmit={formik.handleSubmit}>
			<input
				type="text"
				minLength={3}
				maxLength={30}
				value={formik.values.task}
				name="task"
				placeholder="new todo here"
				onChange={formik.handleChange}
			/>
			<button type="submit">Add</button>
		</AddTodoForm>
	)
}

export default AddTodo


/**const handleSubmit = (e) => {
		e.preventDefault()
		let word = task.trim()
		if (word.length < 3){
			setTask(word)
			return
		}
    const todo = {
      task,
      done: false,
      id: uuidv4()
    }
    dispatch({type: ADD_TODO, payload: todo})
    setTask('')
	} */