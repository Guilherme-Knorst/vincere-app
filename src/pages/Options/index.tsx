import { useAuth0 } from 'react-native-auth0'
import { Typography } from '../../components/Typography'
import { Button } from '../../components/Button'
import { FlexContainer, FlexContainerAnimated } from '../../components/Container'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components'
import { LightSpeedInLeft, LightSpeedInRight, LightSpeedOutRight } from 'react-native-reanimated'
import { heightDP } from '../../utils'
import { TouchableWithoutFeedback, View } from 'react-native'
import { useState } from 'react'

interface OptionsProps {
	dismiss: () => void
}

const ModalOverlay = styled.View`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: 'rgba(0,0,0,0.5)';
`

const MenuItem = styled.View`
	display: flex;
	flex-direction: row;
	width: 90%;
	margin-top: 35;
`

export const Options = ({ dismiss }: OptionsProps) => {
	const { user, clearSession } = useAuth0()
	const theme = useTheme()
	const [isClosing, setIsClosing] = useState(false)

	const handleLogout = async () => {
		await clearSession()
		close()
	}

	const close = () => {
		setIsClosing(!isClosing)
		setTimeout(() => {
			dismiss()
		}, 200)
	}

	return (
		<>
			<TouchableWithoutFeedback onPress={close}>
				<ModalOverlay />
			</TouchableWithoutFeedback>
			{!isClosing && (
				<FlexContainerAnimated
					backgroundColor={theme.palette.background.main}
					entering={LightSpeedInRight}
					exiting={LightSpeedOutRight}
					width='73%'
					height={heightDP('108.1%')}
					alignSelf='flex-end'
					alignItems='center'>
					<MenuItem>
						<Typography color='primary' fontSize={25}>
							Configurações
						</Typography>
					</MenuItem>
					<MenuItem>
						<Typography color='primary' fontSize={16}>
							icone {user?.name ?? user?.given_name}
						</Typography>
					</MenuItem>
					<MenuItem>
						<Button color='primary' size='medium' onPress={handleLogout} width='100%'>
							Logout
						</Button>
					</MenuItem>
				</FlexContainerAnimated>
			)}
		</>
	)
}
