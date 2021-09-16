import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'
import SidePanel from './SidePanel'

import { GlobalStyle } from './theme/GlobalStyles'
import { useTheme } from './theme/useTheme'

import TodoContextProvider from './Todos/context/TodoContext'
import Todos from './Todos/Todos'

function App() {
	const { theme, themeLoaded, getFonts } = useTheme()
	const [selectedTheme, setSelectedTheme] = useState(theme)

	useEffect(() => {
		setSelectedTheme(theme)
	}, [themeLoaded])


	useEffect(() => {
		WebFont.load({
			google: {
				families: getFonts()
			}
		})	
	}, [])

	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyle />
					<SidePanel />
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
