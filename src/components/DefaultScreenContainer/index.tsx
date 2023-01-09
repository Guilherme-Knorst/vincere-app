import { widthDP, heightDP } from '../../utils'
import styled from 'styled-components/native'
import defaultBackground from '../../../back1.jpg'

export interface DefaultScreenContainerProps {
	backgroundColor?: string
	justifyContent?: string
	flexDirection?: string
}

export interface DefaultScreenContainerBackgroundProps {
	justifyContent?: string
	flexDirection?: string
}

export const DefaultScreenContainer = styled.View.attrs({})<DefaultScreenContainerProps>`
	flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
	background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
	width: ${widthDP('100%')};
	height: ${heightDP('100%')};
	justify-content: ${({ justifyContent }) => justifyContent ?? 'space-around'};
	align-items: center;
`

export const DefaultScreenContainerBackground = styled.ImageBackground.attrs(({ source }) => ({
	source: source ? source : defaultBackground,
}))<DefaultScreenContainerBackgroundProps>`
	flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
	width: ${widthDP('100%')};
	height: ${heightDP('100%')};
	justify-content: ${({ justifyContent }) => justifyContent ?? 'space-around'};
	align-items: center;
`
