import { PropsWithChildren, ReactNode } from 'react'
import { pixelToDP, widthDP, heightDP } from '../../utils'
import styled, { css } from 'styled-components/native'
import Touchable from '../Touchable'
import { Typography } from '../Typography'
import backFood from '../../../backFood.jpg'
import { GradientContainer } from '../LinearGradient'
import { FlexContainer, FlexContainerProps } from '../Container'

export interface CardButtonProps {
	onPress?: (() => Promise<void>) | (() => void)
	disabled?: boolean
}

// const disabledBackground = css`
// 	background-color: ${({ theme }) => theme.palette.disabled.main};
// `

// const disabledColor = css`
// 	color: ${({ theme }) => theme.palette.disabled.contrast};
// `

export function CardButton(props: CardButtonProps & FlexContainerProps & PropsWithChildren) {
	return (
		<Touchable delayPressIn={0} disabled={props.disabled} onPress={props.onPress}>
			<FlexContainer {...props}>
				{props.children}
				<FlexContainer source={backFood} height={'31%'} width={'40%'} borderRadius={20} />
			</FlexContainer>
		</Touchable>
	)
}
