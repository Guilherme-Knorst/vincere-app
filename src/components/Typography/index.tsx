import MaskedView from '@react-native-masked-view/masked-view'
import { ReactNode } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styled, { css } from 'styled-components/native'
import { pixelToDP } from '../../utils'

export interface TypographyProps {
	children: ReactNode | string
	align?: string
	bold?: boolean
	isFocused?: boolean
	color: 'primary' | 'secondary' | 'tertiary'
	fontSize?: number
	uppercase?: boolean
	width?: string
	gradient?: boolean
	lineHeight?: number
}

export interface GradientTypographyProps extends TypographyProps {
	opacity: number
}

const Text = styled.Text.attrs({})<TypographyProps>`
	color: ${({ isFocused, color, theme }) =>
		isFocused ? theme.palette[color].main : theme.palette[color].contrast};
	font-size: ${({ fontSize, theme }) =>
		fontSize ? pixelToDP(fontSize) : theme.typography.size.main + 'px'};
	text-align: ${({ align }) => (align ? align : 'left')};
	font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 22) + 'px'};
	padding-left: ${pixelToDP(10)};
	padding-right: ${pixelToDP(10)};
	flex-shrink: 1;
	${({ width }) =>
		width &&
		css`
			width: ${width};
		`};
`

const GradientText = styled(Text).attrs({
	elevation: 40,
	shadowColor: 'yellow',
})<GradientTypographyProps>`
	opacity: ${({ opacity }) => opacity};
`

const Gradient = styled(LinearGradient).attrs({
	colors: ['#E6BF84', '#E6BF84', '#f48958', '#f48958'],
	// colors: ['#00fffb', '#00fffb', '#00fffb', '#9800ff'],
	start: { x: 0, y: 0 },
	end: { x: 1, y: 0 },
	elevation: 40,
	shadowColor: '#9800ff',
})``

export function Typography({
	align,
	bold,
	children,
	color,
	fontSize,
	uppercase,
	gradient,
	width,
	lineHeight,
	isFocused,
}: TypographyProps) {
	return (
		<>
			{gradient ? (
				<MaskedView
					maskElement={
						<Text
							isFocused={isFocused}
							align={align}
							bold={bold}
							color={color}
							fontSize={fontSize}
							uppercase={uppercase}
							lineHeight={lineHeight}
							width={width}>
							{children}
						</Text>
					}>
					<Gradient>
						<GradientText
							isFocused={isFocused}
							align={align}
							bold={bold}
							color={color}
							fontSize={fontSize}
							opacity={0}
							lineHeight={lineHeight}
							uppercase={uppercase}>
							{children}
						</GradientText>
					</Gradient>
				</MaskedView>
			) : (
				<Text
					isFocused={isFocused}
					align={align}
					bold={bold}
					color={color}
					fontSize={fontSize}
					uppercase={uppercase}
					width={width}
					lineHeight={lineHeight}>
					{children}
				</Text>
			)}
		</>
	)
}
