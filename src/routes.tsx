import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { useAppSelector } from './store/hooks'
import { ScreenHeader } from './components/ScreenHeader'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

export default function Routes() {
	const isLogged = useAppSelector(state => state.auth.isLogged)

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<SafeAreaView
					edges={['right', 'bottom', 'left']}
					style={{ flex: 1, backgroundColor: 'yellow' }}>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						{!isLogged ? (
							<Stack.Screen name='Login' component={Login} />
						) : (
							<Stack.Screen
								name='Main'
								component={Main}
								options={{
									header: () => <ScreenHeader />,
									headerShown: true,
								}}
							/>
						)}
					</Stack.Navigator>
				</SafeAreaView>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
