import { useAuth0 } from 'react-native-auth0'
import { Typography } from '../Typography'
import { Button } from '../Button'
import { FlexContainer, FlexContainerAnimated } from '../Container'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components'
import { LightSpeedInLeft, LightSpeedInRight, LightSpeedOutRight } from 'react-native-reanimated'
import { heightDP } from '../../utils'
import { TouchableWithoutFeedback, View } from 'react-native'
import { useState } from 'react'
import { WorkoutModel } from '../../models/workout'
import TextInput from '../TextInput'
import { ExerciseModel } from '../../models/exercise'
import { useExerciseCategories } from '../../store/workoutSlice'

interface ExerciseFormProps {
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

export const ExerciseForm = ({ dismiss }: ExerciseFormProps) => {
	const { user, clearSession } = useAuth0()
	const exerciseCategories = useExerciseCategories()
	const theme = useTheme()
	const [isClosing, setIsClosing] = useState(false)
	const [exercise, setExercise] = useState<ExerciseModel>({
		id: 15,
		name: 'Exercício',
		category: exerciseCategories[0],
		series: [{ id: 0, repetitions: 10, weight: 70 }],
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
					{exercise.series.map(s => (
						<>
							<TextInput value={s.weight} keyboardType='ascii-capable' label='Peso' />
							<TextInput value={s.repetitions} keyboardType='ascii-capable' label='Repetições' />
							<Button color='primary' size='medium' onPress={handleLogout}>
								Adicionar Série
							</Button>
						</>
					))}
					<Button color='primary' size='medium' onPress={handleLogout}>
						Adicionar
					</Button>
				</FlexContainerAnimated>
			)}
		</>
	)
}
