import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useFormik } from 'formik'

import { TodoContext } from '../context/TodoContext'
import { ADD_TODO } from '../reducers/todoReducer'

import { AddTodoForm } from './AddTodo.Styled'

/* Formik set up */
const initialValues = {task: ''}

const validate = values => {
	const errors = {}
	if (!values.task){
		errors.task = 'Required'
	}
	return errors
}


/* ================ */

const AddTodo = () => {
	const { dispatch } = useContext(TodoContext)

	const formik = useFormik({
		initialValues,
		validate,
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

	console.log('form errors: ', formik.errors)

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
