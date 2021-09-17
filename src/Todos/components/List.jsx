import { useContext } from 'react'

import AddTodo from './AddTodo'
import Todo from './Todo'
import { ListContainer, ButtonContainer } from './List.styled'

import { TodoContext } from '../context/TodoContext'
import { TOGGLE_ALL, REMOVE_DONE } from '../reducers/todoReducer'

const List = ({ todos }) => {
	const { dispatch } = useContext(TodoContext)

	function handleToggleAll(payload){
		dispatch({type: TOGGLE_ALL, payload })
	}

	function handleRemoveDone(){
		dispatch({type: REMOVE_DONE})
	}
	return (
		<ListContainer>
			<h3>My Todos</h3>
			<ButtonContainer>
				<span><button onClick={() => handleToggleAll(true)}>ALL DONE ✔</button></span>
				<span><button onClick={() => handleToggleAll(false)}>RESET ALL ➰</button></span>
				<span><button onClick={handleRemoveDone}>REMOVE DONE ❌</button></span>
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
