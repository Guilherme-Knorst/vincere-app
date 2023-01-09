import React, { ReactNode } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styled, { css } from 'styled-components/native'
import { heightDP, pixelToDP, widthDP } from '../../utils'

export interface TypographyProps {
	children: ReactNode
	align?: string
	bold?: boolean
	color: 'primary' | 'secondary' | 'tertiary'
	fontSize?: number
	uppercase?: boolean
	width?: string
	gradient?: boolean
}

// export interface GradientProps {
// 	size: 'small' | 'medium' | 'large'
// 	width?: string
// }

const Container = styled.Text.attrs({})<TypographyProps>`
	color: ${({ color, theme }) => theme.palette[color].contrast};
	font-size: ${({ fontSize, theme }) =>
		fontSize ? pixelToDP(fontSize) : theme.typography.size.main};
	text-align: ${({ align }) => (align ? align : 'left')};
	font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
	line-height: 30;
	padding-left: ${pixelToDP(10)};
	padding-right: ${pixelToDP(10)};
	${({ width }) =>
		width &&
		css`
					width: ${width}};
			  `};
	/* width: ${({ width }) => (width ? width : widthDP('90%'))}; */
`

const Gradient = styled(LinearGradient).attrs({
	colors: ['#00fffa', '#9800ff'],
	start: { x: 0, y: 0 },
	end: { x: 1, y: 1 },
	elevation: 40,
	shadowColor: '#9800ff',
})`
	/* justify-content: center;
	align-items: center;
	border-radius: 6px;
	${({ size }) =>
		size === 'small' &&
		css`
			height: ${heightDP('3.97%')};
			width: ${widthDP('15%')};
		`};
	${({ size }) =>
		size === 'medium' &&
		css`
			height: ${heightDP('5.97%')};
			width: ${widthDP('30%')};
		`};
	${({ size }) =>
		size === 'large' &&
		css`
			height: ${heightDP('8%')};
			width: ${widthDP('50%')};
		`};
	${({ width }) =>
		width &&
		css`
			width: ${widthDP(width)};
		`}; */
`

export function Typography({
	align,
	bold,
	children,
	color,
	fontSize,
	uppercase,
	width,
	gradient,
}: TypographyProps) {
	return (
		<>
			{gradient ? (
				<Container
					align={align}
					bold={bold}
					color={color}
					fontSize={fontSize}
					uppercase={uppercase}
					width={width}>
					{children}
				</Container>
			) : (
				<Container
					align={align}
					bold={bold}
					color={color}
					fontSize={fontSize}
					uppercase={uppercase}
					width={width}>
					{children}
				</Container>
			)}
		</>
	)
}
