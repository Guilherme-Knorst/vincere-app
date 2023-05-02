import { FlexContainer } from '../Container'
import { PropsWithChildren } from 'react'
import { ImageSourcePropType } from 'react-native'
import { widthDP } from '../../utils'

interface DefaultScreenContainerProps extends PropsWithChildren {
	backgroundImageSource?: ImageSourcePropType
}

export const DefaultScreenContainer = (props: DefaultScreenContainerProps) => {
	return (
		<FlexContainer width={widthDP('90%')} {...props} alignSelf='center'>
			{props.children}
		</FlexContainer>
	)
}
