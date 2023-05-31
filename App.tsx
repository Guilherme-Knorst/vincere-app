import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theming/theme'
import Routes from './src/routes'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { Auth0Provider } from 'react-native-auth0'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ModalPresenterParent } from '@whitespectre/rn-modal-presenter'

const App = () => (
	<Provider store={store}>
		<Auth0Provider clientId='S74u1RhPoIpxL5tc1Y8ju6n32xeklnmL' domain='dev-d965ioqr.us.auth0.com'>
			<ThemeProvider theme={theme}>
				<SafeAreaView style={{ flex: 1 }}>
					<ModalPresenterParent>
						<Routes />
					</ModalPresenterParent>
				</SafeAreaView>
			</ThemeProvider>
		</Auth0Provider>
	</Provider>
)

export default App
