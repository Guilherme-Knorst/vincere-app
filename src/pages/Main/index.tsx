import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FlexContainer } from '../../components/Container'
import { ScreenHeader } from '../../components/ScreenHeader'
import { TabBar } from '../../components/TabBar'
import { HabitTracker } from '../HabitTracker'
import { Home } from '../Home'

const Tab = createBottomTabNavigator()

export const Main = () => {
	return (
		//aqui muda pra 106.1 pra corrigir quando n tem s botoes
		<FlexContainer height='100%' flexDirection='row' backgrondColor='black'>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					header: () => <ScreenHeader />,
				}}
				tabBar={props => <TabBar {...props} />}>
				<Tab.Screen name='Home' component={Home} />
				<Tab.Screen name='Habit Tracker' component={HabitTracker} />
				<Tab.Screen name='Ranking' component={HabitTracker} />
			</Tab.Navigator>
		</FlexContainer>
	)
}
