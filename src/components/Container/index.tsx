import styled, { css } from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { PropsWithChildren } from 'react'
import { ImageSourcePropType, FlexStyle } from 'react-native'
import defaultBackground from '../../../back1.jpg'

export interface FlexContainerProps extends FlexStyle {
	gradient?: boolean
	gradientBorderRadius?: number
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

const Container = styled.View<FlexContainerProps>`
	${({ border }) =>
		border &&
		css`
			border: 1px solid red;
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

const Gradient = styled(LinearGradient).attrs({
	// colors: ['#00fffa', '#9800ff'],
	// colors: ['#E6BF84', '#E6BF84', '#f48958', '#f48958'],
	colors: ['#E6BF84', '#E6BF84', '#f48958', '#f48958'],
	start: { x: 0, y: 0 },
	end: { x: 1, y: 1 },
	elevation: 40,
	shadowColor: '#9800ff',
})<FlexContainerProps>`
	${({ borderRadius }) =>
		borderRadius &&
		css`
			border-radius: ${borderRadius};
		`};
`

export const FlexContainer = (props: FlexContainerProps & PropsWithChildren) => {
	if (props.gradient)
		return (
			<Gradient borderRadius={props.borderRadius}>
				<Container {...props}>{props.children}</Container>
			</Gradient>
		)

	if (props.backgroundImageSource)
		return (
			<ContainerImageBackground {...props} source={props.backgroundImageSource}>
				<Container {...props}>{props.children}</Container>
			</ContainerImageBackground>
		)

	return <Container {...props}>{props.children}</Container>
}
