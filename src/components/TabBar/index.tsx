import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from 'react-native'
import { FlexContainer } from '../Container'
import { Typography } from '../Typography'
import { useTheme } from 'styled-components'

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
	const theme = useTheme()
	return (
		<FlexContainer
			justifyContent='center'
			width='100%'
			position='absolute'
			flexDirection='row'
			bottom={20}>
			<FlexContainer
				backgroundColor={theme.palette.background.contrast}
				flexDirection='row'
				padding={20}
				width='90%'
				borderRadius={20}
				justifyContent='space-between'>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key]
					// const label =
					// 	options.tabBarLabel !== undefined
					// 		? options.tabBarLabel
					// 		: options.title !== undefined
					// 		? options.title
					// 		: route.name

					const isFocused = state.index === index

					// console.log(isFocused)

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
								<Typography gradient isFocused={isFocused} color='primary' bold uppercase>
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
		</FlexContainer>
	)
}
