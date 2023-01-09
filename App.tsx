import { ThemeProvider } from 'styled-components'
import { theme } from './src/theming/theme'
import Routes from './src/routes'
import { AuthProvider } from './src/providers/Auth'
import { Provider } from 'react-redux'
import { store } from './src/store'

const App = () => (
	<Provider store={store}>
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</AuthProvider>
	</Provider>
)

export default App
