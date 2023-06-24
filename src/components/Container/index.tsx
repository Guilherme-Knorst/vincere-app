import styled, { css } from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { PropsWithChildren } from 'react'
import { ImageSourcePropType, FlexStyle, ViewProps } from 'react-native'
import defaultBackground from '../../../back1.jpg'
import Animated, { AnimateProps } from 'react-native-reanimated'

interface GradientProps {
	marginTop?: number
	borderRadius?: number
	paddingRight?: number
	paddingLeft?: number
	paddingTop?: number
	paddingBottom?: number
}

export interface FlexContainerProps extends FlexStyle {
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
	gradientProps?: GradientProps
	gradient?: boolean
}

export interface FlexContainerAnimatedProps extends FlexStyle, AnimateProps<ViewProps> {
	gradientProps?: GradientProps
	gradient?: boolean
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

const ContainerAnimated = styled(Animated.View)<FlexContainerProps>`
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

const Gradient = styled(LinearGradient).attrs(
	({ colors = ['#f4d058', '#ef9611', '#fda313', '#f4d058'] }) => ({
		// colors: ['#00fffa', '#9800ff'],
		colors: colors,
		start: { x: 0, y: 0 },
		end: { x: 1, y: 1 },
		elevation: 40,
	}),
)<GradientProps>`
	${({ borderRadius }) =>
		borderRadius &&
		css`
			border-radius: ${borderRadius};
		`};
`

export const FlexContainer = (props: FlexContainerProps & PropsWithChildren) => {
	if (props.gradientProps)
		return (
			<Container {...props}>
				<Gradient {...props.gradientProps}>{props.children}</Gradient>
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
			<ContainerAnimated {...props}>
				<Gradient {...props.gradientProps}>{props.children}</Gradient>
			</ContainerAnimated>
		)

	return <ContainerAnimated {...props}>{props.children}</ContainerAnimated>
}
