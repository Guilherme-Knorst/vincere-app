import { widthDP, heightDP } from '../../utils'
import styled from 'styled-components/native'

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