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
import { WorkoutModel } from '../../models/workout'
import TextInput from '../TextInput'

interface WorkoutFormProps {
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

export const WorkoutForm = ({ dismiss }: WorkoutFormProps) => {
	const { user, clearSession } = useAuth0()
	const theme = useTheme()
	const [isClosing, setIsClosing] = useState(false)
	const [exercise, setExercise] = useState<WorkoutModel>({
		name: 'Exercício',
		series: '4',
		weight: '20',
		repetitions: '8',
		id: 1,
	})

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
					justifyContent='space-evenly'
					height={heightDP('100%')}
					alignSelf='flex-end'
					padding={20}
					// alignItems='center'
				>
					<Typography color='primary' fontSize={25}>
						{exercise.name}
					</Typography>
					<TextInput value={exercise.name} keyboardType='ascii-capable' label='Nome' />
					<TextInput value={exercise.series} keyboardType='ascii-capable' label='Séries' />
					<TextInput value={exercise.repetitions} keyboardType='ascii-capable' label='Repetições' />
					<Button color='primary' size='medium' onPress={handleLogout}>
						Adicionar
					</Button>
				</FlexContainerAnimated>
			)}
		</>
	)
}
