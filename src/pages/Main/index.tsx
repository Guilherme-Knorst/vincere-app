import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../Home'

const Tab = createBottomTabNavigator()

export const Main = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarLabel: 'Pilares',
				}}
			/>
		</Tab.Navigator>
	)
}
