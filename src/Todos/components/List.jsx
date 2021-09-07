import { useContext } from 'react'

import AddTodo from './AddTodo'
import Todo from './Todo'
import { ListContainer, ButtonContainer } from './List.styled'

import { TodoContext } from '../context/TodoContext'
import { TOGGLE_ALL } from '../reducers/todoReducer'

const List = ({ todos }) => {
	const { dispatch } = useContext(TodoContext)

	function handleToggleAll(payload){
		dispatch({type: TOGGLE_ALL, payload })
	}
	return (
		<ListContainer>
			<h3>My Todos</h3>
			<ButtonContainer>
				<span><button onClick={() => handleToggleAll(true)}>ALL DONE ✔</button></span>
				<span><button onClick={() => handleToggleAll(false)}>RESET ALL ➰</button></span>
			</ButtonContainer>
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
		</ListContainer>
	)
}

export default List
