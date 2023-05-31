import { PropsWithChildren } from 'react'
import Touchable from '../Touchable'
import backFood from '../../../backFood.jpg'
import { FlexContainer } from '../Container'
import { TouchableOpacity } from 'react-native'
import { Typography } from '../Typography'

export interface CardButtonProps {
	onPress?: (() => Promise<void>) | (() => void)
	disabled?: boolean
	text: string
}

// const disabledBackground = css`
// 	background-color: ${({ theme }) => theme.palette.disabled.main};
// `

// const disabledColor = css`
// 	color: ${({ theme }) => theme.palette.disabled.contrast};
// `

export function CardButton({ text, disabled, onPress }: CardButtonProps & PropsWithChildren) {
	return (
		<TouchableOpacity delayPressIn={0} disabled={disabled} onPress={onPress}>
			<FlexContainer
				flexDirection='row'
				alignItems='center'
				border
				backgroundColor='#111111'
				borderRadius={20}>
				<Typography gradient color='secondary' fontSize={16} bold uppercase>
					{text}
				</Typography>
				<FlexContainer
					backgroundImageSource={backFood}
					borderRadius={20}
					height='90px'
					width='140px'
				/>
			</FlexContainer>
		</TouchableOpacity>
	)
}
