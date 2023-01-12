import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { useAppSelector } from './store/hooks'
import { FlexContainer } from './components/Container'

const Stack = createNativeStackNavigator()

export default function Routes() {
	const isLogged = useAppSelector(state => state.auth.isLogged)

	return (
		<NavigationContainer>
			{/* <FlexContainer
				height='100%'
				backgrondColor='black'
				flexJustifyItems='center'
				flexDirection='column'> */}
			<Stack.Navigator
				screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'black' } }}>
				{!isLogged ? (
					<Stack.Screen name='Login' component={Login} />
				) : (
					<Stack.Screen name='Main' component={Main} />
				)}
			</Stack.Navigator>
			{/* </FlexContainer> */}
		</NavigationContainer>
	)
}
