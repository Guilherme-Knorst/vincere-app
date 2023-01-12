import { widthDP, heightDP } from '../../utils'
import styled, { css } from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { PropsWithChildren } from 'react'
import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native'
import defaultBackground from '../../../back1.jpg'

export interface FlexContainerProps {
	gradient?: boolean
	gradientBorderRadius?: number
	flexDirection?: string
	flexWrap?: string
	flexAlignItems?: string
	flexAlignContent?: string
	flexJustifyItems?: string
	flexJustifyContent?: string
	flexRowGap?: number
	flexColumnGap?: number
	alignSelf?: string
	width?: string
	height?: string
	borderRadius?: number
	backgrondColor?: string
	paddingRight?: number
	paddingLeft?: number
	paddingTop?: number
	paddingBottom?: number
	source?: ImageSourcePropType
	imageStyle?: StyleProp<ImageStyle>
	border?: boolean
}

const Container = styled.View.attrs({})<FlexContainerProps>`
	${({ border }) =>
		border &&
		css`
			border: 1px solid red;
		`};
	${({ backgrondColor }) =>
		backgrondColor &&
		css`
			background-color: ${backgrondColor};
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
	${({ flexJustifyItems }) =>
		flexJustifyItems &&
		css`
			justify-items: ${flexJustifyItems};
		`};
	${({ flexAlignItems }) =>
		flexAlignItems &&
		css`
			align-items: ${flexAlignItems};
		`};
	${({ flexAlignContent }) =>
		flexAlignContent &&
		css`
			align-content: ${flexAlignContent};
		`};
	${({ alignSelf }) =>
		alignSelf &&
		css`
			align-self: ${alignSelf};
		`};
	${({ flexJustifyContent }) =>
		flexJustifyContent &&
		css`
			justify-content: ${flexJustifyContent};
		`};
	${({ width }) =>
		width &&
		css`
			width: ${widthDP(width)};
		`};
	${({ height }) =>
		height &&
		css`
			height: ${heightDP(height)};
		`};
`

const ContainerImageBackground = styled.ImageBackground.attrs(({ source }) => ({
	source: source ? source : defaultBackground,
}))<FlexContainerProps>`
	${({ backgrondColor }) =>
		backgrondColor &&
		css`
			background-color: ${backgrondColor};
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
	${({ flexJustifyItems }) =>
		flexJustifyItems &&
		css`
			justify-items: ${flexJustifyItems};
		`};
	${({ flexAlignItems }) =>
		flexAlignItems &&
		css`
			align-items: ${flexAlignItems};
		`};
	${({ flexAlignContent }) =>
		flexAlignContent &&
		css`
			align-content: ${flexAlignContent};
		`};
	${({ alignSelf }) =>
		alignSelf &&
		css`
			align-self: ${alignSelf};
		`};
	${({ flexJustifyContent }) =>
		flexJustifyContent &&
		css`
			justify-content: ${flexJustifyContent};
		`};
	${({ width }) =>
		width &&
		css`
			width: ${widthDP(width)};
		`};
	${({ height }) =>
		height &&
		css`
			height: ${heightDP(height)};
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

	if (props.source)
		return (
			<ContainerImageBackground {...props} imageStyle={props.imageStyle}>
				<Container {...props}>{props.children}</Container>
			</ContainerImageBackground>
		)

	return <Container {...props}>{props.children}</Container>
}
