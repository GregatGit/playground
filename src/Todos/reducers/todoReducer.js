export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_ALL = 'TOGGLE_ALL'
export const REMOVE_DONE = 'REMOVE_DONE'

export const todoReducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_ALL:
			return state.map((todo) => {
				return { ...todo, done: action.payload }
			})
		
		case REMOVE_DONE:
			return state.filter(todo => !todo.done)

		case ADD_TODO:
			return [...state, action.payload]

		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload)

		case TOGGLE_TODO:
			const toggleState = [...state]
			toggleState.forEach((todo) => {
				if (todo.id === action.payload.id) {
					todo.done = action.payload.done
				}
			})
			return toggleState
		default:
			return state
	}
}
