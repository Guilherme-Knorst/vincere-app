import React, { ReactNode } from 'react'
import { pixelToDP, widthDP, heightDP } from '../../utils'
import styled, { css } from 'styled-components/native'
import Touchable from '../Touchable'

export interface AnimatedViewProps {
	backgroundColor?: string
	justifyContent?: string
	flexDirection?: string
}

export const AnimatedView = styled.View.attrs({})<AnimatedViewProps>`
	flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor ? backgroundColor : theme.palette.background};
	width: ${widthDP('100%')};
	height: ${heightDP('100%')};
	justify-content: ${({ justifyContent }) => justifyContent ?? 'space-around'};
	align-items: center;
`

// const ButtonView = styled.View.attrs({})<ButtonViewProps>`
// 	width: ${props => props.width || '100%'};
// 	height: ${props => (props.size === 'medium' ? heightDP('8.955%') : heightDP('5.97%'))};
// 	justify-content: center;
// 	align-items: center;
// 	border-radius: 6px;
// 	background-color: ${props => props.theme.palette[props.color].main};
// 	${props => props.disabled && disabledBackground};
// `

// export function DefaultScreenContainer({
// 	backgroundColor
// }: DefaultScreenContainerProps) {
// 	return (
// 		<Touchable delayPressIn={0} disabled={disabled} onPress={onPress}>
// 			<ButtonView color={color} disabled={disabled} size={size} width={width}>
// 				<Label
// 					bold={bold}
// 					color={color}
// 					disabled={disabled}
// 					fontSize={fontSize}
// 					uppercase={uppercase}>
// 					{children}
// 				</Label>
// 			</ButtonView>
// 		</Touchable>
// 	)
// }
