import { widthDP, heightDP } from '../../../utils'
import styled, { css } from 'styled-components/native'
import Touchable from '../../Touchable'
import LinearGradient from 'react-native-linear-gradient'
import { Typography } from '../../Typography'
import { TypographyProps } from '../../Typography'

export interface ComponentProps {
	onPress: (() => Promise<void>) | (() => void)
}

export interface GradientProps {
	size: 'small' | 'medium' | 'large'
	width?: string
}

const Gradient = styled(LinearGradient).attrs({
	colors: ['#E6BF84', '#E6BF84', '#f48958', '#f48958'],
	start: { x: 0, y: 0 },
	end: { x: 1, y: 1 },
	elevation: 40,
	shadowColor: '#E6BF84',
})<GradientProps>`
	margin-bottom: 50px;
	justify-content: center;
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
			width: ${widthDP('63%')};
		`};
	${({ width }) =>
		width &&
		css`
			width: ${widthDP(width)};
		`};
`

export function GradientButton(props: ComponentProps & GradientProps & TypographyProps) {
	return (
		<Touchable delayPressIn={0} onPress={props.onPress}>
			<Gradient size={props.size}>
				<Typography {...props}>{props.children}</Typography>
			</Gradient>
		</Touchable>
	)
}
