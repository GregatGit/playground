import { useContext } from 'react'

import AddTodo from './AddTodo'
import Todo from './Todo'

import { TodoContext } from '../context/TodoContext'
import { TOGGLE_ALL } from '../reducers/todoReducer'

const List = ({ todos }) => {
	const { dispatch } = useContext(TodoContext)

	function handleToggleAll(payload){
		dispatch({type: TOGGLE_ALL, payload })
	}
	return (
		<div>
			<h3>My Todos</h3>
			<div>
				<span><button onClick={() => handleToggleAll(true)}>ALL DONE</button></span>
				<span><button onClick={() => handleToggleAll(false)}>RESET ALL</button></span>
			</div>
			<div>
				{todos.length < 1 ? (
					<div>... your list is empty ...</div>
				) : (
					todos.map((todo) => <Todo key={todo.id} todo={todo} />)
				)}
			</div>
      <div>
        <AddTodo />
      </div>
		</div>
	)
}

export default List
