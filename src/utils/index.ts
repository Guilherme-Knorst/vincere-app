import { Dimensions, PixelRatio } from 'react-native'

export function widthDP(widthPercent: string) {
	const screenWidth = Dimensions.get('window').width

	return PixelRatio.roundToNearestPixel((screenWidth * parseFloat(widthPercent)) / 100)
}

export function heightDP(heightPercent: string) {
	// const screenHeight = Dimensions.get('window').height + 47
	const screenHeight = Dimensions.get('window').height

	return PixelRatio.roundToNearestPixel((screenHeight * parseFloat(heightPercent)) / 100)
}

export function pixelToDP(value: number) {
	const pixelBase = (value / 670) * 100
	const screenHeight = Dimensions.get('window').height

	return PixelRatio.roundToNearestPixel((screenHeight / 100) * pixelBase)
}
