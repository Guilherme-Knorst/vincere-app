import styled, { css } from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { PropsWithChildren } from 'react'
import { ImageSourcePropType, FlexStyle, ViewProps } from 'react-native'
import defaultBackground from '../../../back1.jpg'
import Animated, { AnimateProps } from 'react-native-reanimated'

interface GradientProps {
	gradient?: boolean
	gradientBorderRadius?: number
	gradientColors?: Array<string>
}

export interface FlexContainerProps extends FlexStyle, PropsWithChildren, GradientProps {
	width?: string
	height?: string
	borderRadius?: number
	backgroundColor?: string
	paddingRight?: number
	paddingLeft?: number
	paddingTop?: number
	paddingBottom?: number
	backgroundImageSource?: ImageSourcePropType
	border?: boolean
}

export interface FlexContainerAnimatedProps
	extends FlexStyle,
		AnimateProps<ViewProps>,
		GradientProps {
	width?: string
	height?: string
	borderRadius?: number
	backgroundColor?: string
	paddingRight?: number
	paddingLeft?: number
	paddingTop?: number
	paddingBottom?: number
	border?: boolean
}

const Container = styled(Animated.View)<FlexContainerProps>`
	${({ border }) =>
		border &&
		css`
			border: 1px solid #f4d058;
		`};
	${({ backgroundColor }) =>
		backgroundColor &&
		css`
			background-color: ${backgroundColor};
		`};
	${({ borderRadius }) =>
		borderRadius &&
		css`
			border-radius: ${borderRadius};
		`};
	${({ paddingBottom }) =>
		paddingBottom &&
		css`
			padding-bottom: ${paddingBottom};
		`};
	${({ paddingTop }) =>
		paddingTop &&
		css`
			padding-top: ${paddingTop};
		`};
	${({ paddingLeft }) =>
		paddingLeft &&
		css`
			padding-left: ${paddingLeft};
		`};
	${({ paddingRight }) =>
		paddingRight &&
		css`
			padding-right: ${paddingRight};
		`};
	${({ flexDirection }) =>
		flexDirection &&
		css`
			flex-direction: ${flexDirection};
		`};
	${({ flexWrap }) =>
		flexWrap &&
		css`
			flex-wrap: ${flexWrap};
		`};
	${({ alignItems }) =>
		alignItems &&
		css`
			align-items: ${alignItems};
		`};
	${({ alignContent }) =>
		alignContent &&
		css`
			align-content: ${alignContent};
		`};
	${({ alignSelf }) =>
		alignSelf &&
		css`
			align-self: ${alignSelf};
		`};
	${({ justifyContent }) =>
		justifyContent &&
		css`
			justify-content: ${justifyContent};
		`};
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`};
	${({ height }) =>
		height &&
		css`
			height: ${height};
		`};
`

const ContainerImageBackground = styled.ImageBackground.attrs(({ source }) => ({
	source: source ? source : defaultBackground,
}))<FlexContainerProps>`
	${({ backgroundColor }) =>
		backgroundColor &&
		css`
			background-color: ${backgroundColor};
		`};
	${({ borderRadius }) =>
		borderRadius &&
		css`
			border-radius: ${borderRadius};
		`};
	${({ paddingBottom }) =>
		paddingBottom &&
		css`
			padding-bottom: ${paddingBottom};
		`};
	${({ paddingTop }) =>
		paddingTop &&
		css`
			padding-top: ${paddingTop};
		`};
	${({ paddingLeft }) =>
		paddingLeft &&
		css`
			padding-left: ${paddingLeft};
		`};
	${({ paddingRight }) =>
		paddingRight &&
		css`
			padding-right: ${paddingRight};
		`};
	${({ flexDirection }) =>
		flexDirection &&
		css`
			flex-direction: ${flexDirection};
		`};
	${({ flexWrap }) =>
		flexWrap &&
		css`
			flex-wrap: ${flexWrap};
		`};
	${({ alignItems }) =>
		alignItems &&
		css`
			align-items: ${alignItems};
		`};
	${({ alignContent }) =>
		alignContent &&
		css`
			align-content: ${alignContent};
		`};
	${({ alignSelf }) =>
		alignSelf &&
		css`
			align-self: ${alignSelf};
		`};
	${({ justifyContent }) =>
		justifyContent &&
		css`
			justify-content: ${justifyContent};
		`};
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`};
	${({ height }) =>
		height &&
		css`
			height: ${height};
		`};
`

const Gradient = styled(LinearGradient).attrs(({ colors }) => ({
	// colors: ['#00fffa', '#9800ff'],
	colors: colors ?? ['#f4d058', '#ef9611', '#fda313', '#f4d058'],
	start: { x: 0, y: 0 },
	end: { x: 1, y: 1 },
	elevation: 40,
	shadowColor: '#9800ff',
}))<FlexContainerProps & PropsWithChildren>`
	${({ gradientBorderRadius }) =>
		gradientBorderRadius &&
		css`
			border-radius: ${gradientBorderRadius};
		`};
`

export const FlexContainer = (props: FlexContainerProps & GradientProps) => {
	if (props.gradient)
		return (
			<Container {...props} gradientBorderRadius={props.gradientBorderRadius}>
				<Gradient
					padding={props.padding}
					gradientBorderRadius={props.gradientBorderRadius}
					colors={props.gradientColors}>
					{props.children}
				</Gradient>
			</Container>
		)

	if (props.backgroundImageSource)
		return (
			<ContainerImageBackground {...props} source={props.backgroundImageSource}>
				<Container>{props.children}</Container>
			</ContainerImageBackground>
		)

	return <Container {...props}>{props.children}</Container>
}

export const FlexContainerAnimated = (props: FlexContainerAnimatedProps & PropsWithChildren) => {
	if (props.gradient)
		return (
			<Gradient gradientBorderRadius={props.gradientBorderRadius} colors={props.gradientColors}>
				<Container {...props}>{props.children}</Container>
			</Gradient>
		)

	return <Container {...props}>{props.children}</Container>
}
