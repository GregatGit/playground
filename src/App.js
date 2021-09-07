import './App.css'
import TodoContextProvider from './Todos/context/TodoContext'
import Todos from './Todos/Todos'

function App() {
	return (
		<div className="App">
			<h1>Playground</h1>
			<TodoContextProvider>
				<Todos />
			</TodoContextProvider>
		</div>
	)
}

export default App
