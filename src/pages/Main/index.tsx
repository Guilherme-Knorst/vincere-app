import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlexContainer } from '../../components/Container'
import { TabBar } from '../../components/TabBar'
import { HabitTracker } from '../HabitTracker'
import { Home } from '../Home'

const Tab = createBottomTabNavigator()

export const Main = () => {
	return (
		<SafeAreaView edges={['right', 'bottom', 'left']} style={{ flex: 1, height: '100%' }}>
			<FlexContainer height='90%' flexDirection='row' borderRadius={10} backgrondColor='black'>
				<Tab.Navigator
					screenOptions={{
						headerShown: false,
					}}
					tabBar={props => <TabBar {...props} />}>
					<Tab.Screen name='Home' component={Home} />
					<Tab.Screen name='HabitTracker' component={HabitTracker} />
					<Tab.Screen name='Social' component={HabitTracker} />
				</Tab.Navigator>
			</FlexContainer>
		</SafeAreaView>
	)
}
