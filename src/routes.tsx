import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { useAuth0 } from 'react-native-auth0'

// import { ComponentType } from 'react'
// import { DefaultScreenContainer } from './components/DefaultScreenContainer'

const Stack = createNativeStackNavigator()

export default function Routes() {
	const { user, error, isLoading } = useAuth0()

	console.log(error)

	// const withContainer = <P extends object>(Component: ComponentType) => {
	// 	return function WithContainer(props: P) {
	// 		return (
	// 			<DefaultScreenContainer>
	// 				<Component {...props} />
	// 			</DefaultScreenContainer>
	// 		)
	// 	}
	// }

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				{!user ? (
					<Stack.Screen name='Login' component={Login} />
				) : (
					<Stack.Screen name='Main' component={Main} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
