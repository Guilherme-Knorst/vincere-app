import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './pages/Main'
import Login from './pages/Login'

const Stack = createNativeStackNavigator()

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='Login'
					component={Login}
					// options={{
					// 	title: 'Login',
					// 	headerStyle: { backgroundColor: '#7159c1' },
					// 	headerTintColor: '#fff',
					// 	headerTitleAlign: 'center',
					// }}
				/>
				<Stack.Screen
					name='Main'
					component={Main}
					options={{
						title: 'Tela Principal',
						headerStyle: { backgroundColor: '#7159c1' },
						headerTintColor: '#fff',
						headerTitleAlign: 'center',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
