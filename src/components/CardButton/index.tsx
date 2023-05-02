import { PropsWithChildren } from 'react'
import Touchable from '../Touchable'
import backFood from '../../../backFood.jpg'
import { FlexContainer } from '../Container'

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

export function CardButton(props: CardButtonProps & PropsWithChildren) {
	return (
		<Touchable delayPressIn={0} disabled={props.disabled} onPress={props.onPress}>
			<FlexContainer
				flexDirection='row'
				alignItems='center'
				justifyContent='space-between'
				height='15%'
				padding={5}
				width='100%'
				backgroundColor='#111111'
				borderRadius={20}>
				{props.children}
				<FlexContainer
					alignSelf='flex-end'
					flexDirection='row'
					backgroundImageSource={backFood}
					borderRadius={20}
					width='150px'
					height='90%'
				/>
			</FlexContainer>
		</Touchable>
	)
}
