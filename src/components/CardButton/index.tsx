import { ReactNode } from 'react'
import { pixelToDP, widthDP, heightDP } from '../../utils'
import styled, { css } from 'styled-components/native'
import Touchable from '../Touchable'
import { Typography } from '../Typography'
import backFood from '../../../backFood.jpg'

export interface CardButtonProps {
	onPress?: (() => Promise<void>) | (() => void)
	disabled?: boolean
	size: 'small' | 'medium' | 'large'
	color: 'primary' | 'secondary' | 'tertiary'
	width?: string
	children: ReactNode
}

const disabledBackground = css`
	background-color: ${({ theme }) => theme.palette.disabled.main};
`

const disabledColor = css`
	color: ${({ theme }) => theme.palette.disabled.contrast};
`

const CardView = styled.ImageBackground.attrs(({ source }) => ({
	source: source ? source : backFood,
	imageStyle: { borderRadius: 15 },
}))<CardButtonProps>`
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
			height: ${heightDP('28.97%')};
		`};
	width: ${({ width }) => width || widthDP('30%')};
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 60px;
	/* background-color: ${({ color, theme }) => theme.palette[color].main}; */
	${({ disabled }) => disabled && disabledBackground}
`

export function CardButton({ color, disabled, size, onPress, width, children }: CardButtonProps) {
	return (
		<Touchable delayPressIn={0} disabled={disabled} onPress={onPress}>
			<CardView color={color} disabled={disabled} size={size} width={width}>
				{children}
			</CardView>
		</Touchable>
	)
}
