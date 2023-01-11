import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Text, TouchableOpacity } from 'react-native'
import { FlexContainer } from '../Container'
import { Typography } from '../Typography'

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
	return (
		<FlexContainer
			// gradient
			backgrondColor='#212121'
			flexDirection='row'
			height='7%'
			width='100%'
			flexJustifyContent='space-around'
			borderRadius={6}
			flexAlignItems='center'>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]
				// const label =
				// 	options.tabBarLabel !== undefined
				// 		? options.tabBarLabel
				// 		: options.title !== undefined
				// 		? options.title
				// 		: route.name

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						navigation.navigate({ name: route.name, merge: true, params: route.params })
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					})
				}

				return (
					<TouchableOpacity
						key={route.key}
						accessibilityRole='button'
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}>
						{isFocused ? (
							<Typography color='tertiary' bold uppercase>
								{route.name}
							</Typography>
						) : (
							<Typography color='primary' bold uppercase>
								{route.name}
							</Typography>
						)}
					</TouchableOpacity>
				)
			})}
		</FlexContainer>
	)
}
