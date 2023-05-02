import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScreenHeader } from '../../components/ScreenHeader'
import { TabBar } from '../../components/TabBar'
import { HabitTracker } from '../HabitTracker'
import { Home } from '../Home'
import { useTheme } from 'styled-components'
import { ComponentType } from 'react'
import { DefaultScreenContainer } from '../../components/DefaultScreenContainer'

const Tab = createBottomTabNavigator()

export const Main = () => {
	const theme = useTheme()

	const withContainer = <P extends object>(Component: ComponentType) => {
		return function WithContainer(props: P) {
			return (
				<DefaultScreenContainer>
					<Component {...props} />
				</DefaultScreenContainer>
			)
		}
	}

	return (
		<Tab.Navigator
			sceneContainerStyle={{
				backgroundColor: theme.palette.background.main,
				display: 'flex',
			}}
			screenOptions={{
				headerShown: true,
				header: () => <ScreenHeader />,
			}}
			initialRouteName='Home'
			tabBar={props => <TabBar {...props} />}>
			<Tab.Screen name='Ranking' component={withContainer(HabitTracker)} />
			<Tab.Screen name='Home' component={withContainer(Home)} />
			<Tab.Screen name='Habit Tracker' component={withContainer(HabitTracker)} />
		</Tab.Navigator>
	)
}
