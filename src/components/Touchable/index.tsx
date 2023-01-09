import { createElement } from 'react'
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

export default function Touchable(props: any) {
	const component = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

	return createElement(component, props)
}
