import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import ExerciseItem from '../../components/ExerciseItem'
import { FlexContainer, FlexContainerAnimated } from '../../components/Container'
import { ListRenderItem, ScrollView, TouchableOpacity } from 'react-native'
import { Typography } from '../../components/Typography'
import { GradientButton } from '../../components/Gradient/GradientButton'
import { ExerciseForm } from '../../components/ExerciseForm'
import { showModal } from '@whitespectre/rn-modal-presenter'
import { WorkoutModel } from '../../models/workout'
import ReactNativeCalendarStrip from 'react-native-calendar-strip'
import { theme } from '../../theming/theme'
import moment, { Moment } from 'moment'
import { heightDP } from '../../utils'
import { LightSpeedInLeft, LightSpeedInRight } from 'react-native-reanimated'
import { FadeIn } from 'react-native-reanimated'
import { Button } from '../../components/Button'
import { FlatList } from 'react-native-gesture-handler'
import { ExerciseModel } from '../../models/exercise'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { makeSelectWorkoutByDay, updateWorkout } from '../../store/workoutSlice'
import { useSelector } from 'react-redux'

interface WorkoutProps {}

const Workout: FunctionComponent<WorkoutProps> = () => {
	const [selectedDate, setSelectedDate] = useState<Moment>(moment())
	const workout = useSelector(
		useMemo(() => makeSelectWorkoutByDay(selectedDate.format('dddd')), [selectedDate]),
	)
	const dispatch = useAppDispatch()
	const handleDataChange = (date: Moment) => setSelectedDate(date)

	const showForm = () => {
		showModal(ExerciseForm, null)
	}

	const renderExercise: ListRenderItem<ExerciseModel> = ({ item, index }) => {
		const onChangeExercise = (updatedExercise: ExerciseModel) => {
			dispatch(
				updateWorkout({
					...workout,
					exercises: [
						...workout.exercises.map(e => (e.id === item.id ? { ...updatedExercise } : { ...e })),
					],
				}),
			)
		}
		return (
			<ExerciseItem
				exercise={item}
				animationAdd={index * 200}
				onChangeExercise={onChangeExercise}
			/>
		)
	}

	return (
		<ScrollView nestedScrollEnabled>
			<Typography color='primary' fontSize={30} gradient bold>
				Treinos
			</Typography>
			<FlexContainer justifyContent='space-evenly' height={heightDP('30%')}>
				<FlexContainerAnimated entering={FadeIn.duration(1300)}>
					<ReactNativeCalendarStrip
						locale={{ name: 'pt-br', config: {} }}
						scrollable
						style={{
							height: 100,
							paddingTop: 10,
							paddingBottom: 10,
							borderRadius: 20,
						}}
						selectedDate={selectedDate}
						calendarColor={'#f4d058'}
						calendarHeaderStyle={{ color: theme.palette.secondary.contrast, fontSize: 18 }}
						dateNumberStyle={{ color: theme.palette.secondary.contrast, fontSize: 20 }}
						dateNameStyle={{ color: theme.palette.secondary.contrast, fontSize: 13 }}
						iconContainer={{ flex: 0.1 }}
						onDateSelected={handleDataChange}
					/>
				</FlexContainerAnimated>
				<Typography color='primary' fontSize={30} align='center'>
					{workout?.name}
				</Typography>
				{/* <FlexContainer alignSelf='center' justifyContent='space-between' height='30%'>
					<Typography bold fontSize={18} align='center'>
						Volume total {totalVolume} vs {lastVolume}
					</Typography>

					{totalVolume >= lastVolume ? (
						<>
							<Typography color='tertiary' bold uppercase fontSize={15} align='center'>
								PARABENS!!
							</Typography>
							<Typography color='tertiary' bold fontSize={15} align='center'>
								Você fez um volume total{' '}
								{(((totalVolume - lastVolume) / lastVolume) * 100).toFixed(2)}% maior comparado à
								semana passada
							</Typography>
						</>
					) : (
						<Typography bold uppercase fontSize={15}>
							Semana passada: {lastVolume}
						</Typography>
					)}
				</FlexContainer> */}
			</FlexContainer>
			{/* {console.log(workout?.exercises[0].series)} */}
			<FlatList
				nestedScrollEnabled
				data={workout?.exercises}
				renderItem={renderExercise}
				key='id'
			/>

			<FlexContainer
				width='30%'
				alignSelf='center'
				justifyContent='center'
				height={heightDP('10%')}>
				<Button onPress={showForm} size='medium' color='primary'>
					Adicionar
				</Button>
			</FlexContainer>
		</ScrollView>
	)
}

export default Workout
