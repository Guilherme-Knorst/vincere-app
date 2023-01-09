import { widthDP, heightDP } from '../../utils'
import styled, { css } from 'styled-components/native'

export interface FlexContainerProps {
	justifyContent?: string
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
}

export const FlexContainer = styled.View.attrs({})<FlexContainerProps>`
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
	${({ justifyContent }) =>
		justifyContent &&
		css`
			justify-content: ${justifyContent};
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
			align-self: ${flexJustifyContent};
		`};
	${({ width }) =>
		width &&
		css`
			align-self: ${widthDP(width)};
		`};
	${({ height }) =>
		height &&
		css`
			align-self: ${heightDP(height)};
		`};
`
