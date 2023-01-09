import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { useAppSelector } from './store/hooks'
import { ScreenHeader } from './components/ScreenHeader'

const Stack = createNativeStackNavigator()

export default function Routes() {
	const isLogged = useAppSelector(state => state.auth.isLogged)

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{!isLogged ? (
					<Stack.Screen name='Login' component={Login} />
				) : (
					<Stack.Screen
						name='Main'
						component={Main}
						// options={{
						// 	header: () => <ScreenHeader />,
						// 	headerShown: true,
						// }}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
