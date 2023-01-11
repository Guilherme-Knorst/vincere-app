import defaultBackground from '../../../back1.jpg'
import { FlexContainer, FlexContainerProps } from '../Container'
import { PropsWithChildren } from 'react'
import { ImageBackground } from 'react-native'

// const Container = styled.View.attrs({})<DefaultScreenContainerProps>`
// 	flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
// 	background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
// 	width: ${widthDP('100%')};
// 	height: ${heightDP('100%')};
// 	justify-content: ${({ justifyContent }) => justifyContent ?? 'space-around'};
// 	align-items: center;
// `

// const ContainerBackground = styled.ImageBackground.attrs(({ source }) => ({
// 	source: source ? source : defaultBackground,
// }))<DefaultScreenContainerBackgroundProps>`
// 	flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
// 	width: ${widthDP('100%')};
// 	height: ${heightDP('100%')};
// 	justify-content: ${({ justifyContent }) => justifyContent ?? 'space-around'};
// 	align-items: center;
// `

export const DefaultScreenContainer = (props: FlexContainerProps & PropsWithChildren) => {
	return <FlexContainer {...props}>{props.children}</FlexContainer>
}
