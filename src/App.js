import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'

import { GlobalStyle } from './theme/GlobalStyles'
import { useTheme } from './theme/useTheme'

import TodoContextProvider from './Todos/context/TodoContext'
import Todos from './Todos/Todos'

const Container = styled.div`
	margin: 5px auto 5px auto;
`

function App() {
	const { theme, themeLoaded, getFonts } = useTheme()
	const [selectedTheme, setSelectedTheme] = useState(theme)

	useEffect(() => {
		setSelectedTheme(theme)
	}, [themeLoaded])

	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyle />
					<h1>Playground</h1>
					<TodoContextProvider>
						<Todos />
					</TodoContextProvider>
				</ThemeProvider>
			)}
		</>
	)
}

export default App
