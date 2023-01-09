// const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.inputColor || "palevioletred"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

// const Input = styled.input.attrs(props => ({
//   we can define static props
//   type: "text",

//   or we can define dynamic ones
//   size: props.size || "1em",
// }))`
//   color: palevioletred;
//   font-size: 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;

//   /* here we use the dynamically computed prop */
//   margin: ${props => props.size};
//   padding: ${props => props.size};
// `;

// Input's attrs will be applied first, and then this attrs obj
// const PasswordInput = styled(Input).attrs({
//   type: "password",
// })`
//   // similarly, border will override Input's border
//   border: 2px solid aqua;
// `;

import React, { ReactNode } from 'react'
import { pixelToDP, widthDP, heightDP } from '../../utils'
import styled, { css } from 'styled-components/native'
import Touchable from '../Touchable'
import LinearGradient from 'react-native-linear-gradient'
import { Typography } from '../Typography'

export interface ButtonProps extends ButtonViewProps, LabelProps {
	children: ReactNode
	onPress: (() => Promise<void>) | (() => void)
}

export interface ButtonViewProps {
	size: 'small' | 'medium' | 'large'
	color: 'primary' | 'secondary' | 'tertiary'
	disabled?: boolean
	width?: string
}

export interface LabelProps {
	color: 'primary' | 'secondary' | 'tertiary'
	bold?: boolean
	disabled?: boolean
	fontSize?: number
	uppercase?: boolean
}

const disabledBackground = css`
	background-color: ${({ theme }) => theme.palette.disabled.main};
`

const disabledColor = css`
	color: ${({ theme }) => theme.palette.disabled.contrast};
`

const ButtonView = styled.View.attrs({
	elevation: 40,
	shadowColor: '#ffea00',
})<ButtonViewProps>`
	width: ${({ width }) => width || widthDP('40%')};
	${({ size }) =>
		size === 'small' &&
		css`
			height: ${heightDP('3.97%')};
		`};
	${({ size }) =>
		size === 'medium' &&
		css`
			height: ${heightDP('5.97%')};
		`};
	${({ size }) =>
		size === 'large' &&
		css`
			height: ${heightDP('8.97%')};
		`};
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	max-height: ${heightDP('8.955%')};
	background-color: ${({ color, theme }) => theme.palette[color].main};
	${({ disabled }) => disabled && disabledBackground};
`

const Label = styled(Typography).attrs({})<LabelProps>`
	${({ disabled }) => disabled && disabledColor}/* font-size: ${({ fontSize, theme }) =>
		fontSize ? pixelToDP(fontSize) : pixelToDP(theme.typography.size.main)};
	font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
	color: ${({ color, theme }) => theme.palette[color].contrast};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')}; */
`

export function Button({
	color,
	bold,
	children,
	disabled,
	fontSize,
	size,
	onPress,
	uppercase,
	width,
}: ButtonProps) {
	return (
		<Touchable delayPressIn={0} disabled={disabled} onPress={onPress}>
			<ButtonView color={color} disabled={disabled} size={size} width={width}>
				<Label
					bold={bold}
					color={color}
					disabled={disabled}
					fontSize={fontSize}
					uppercase={uppercase}>
					{children}
				</Label>
			</ButtonView>
		</Touchable>
	)
}

// Button.defaultProps = {
// 	color: 'primary',
// 	uppercase: false,
// 	variant: 'contained',
// 	fontSize: 12,
// }

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
// Button.defaultProps = {
// 	theme: {
// 		main: 'palevioletred',
// 	},
// }
