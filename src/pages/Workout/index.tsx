import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import WorkoutItem from '../../components/WorkoutItem'
import { FlexContainer, FlexContainerAnimated } from '../../components/Container'
import { ListRenderItem, ScrollView } from 'react-native'
import { Typography } from '../../components/Typography'
import { GradientButton } from '../../components/Gradient/GradientButton'
import { WorkoutForm } from '../../components/WorkoutForm'
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

interface WorkoutProps {}

const dados: WorkoutModel[] = [
	{
		id: 1,
		name: 'Supino reto',
		weight: '50',
		repetitions: '10',
		series: '3',
	},
	// {
	// 	id: 2,
	// 	name: 'Puxada',
	// 	weight: '70',
	// 	repetitions: '8',
	// 	series: '4',
	// },
	// {
	// 	id: 3,
	// 	name: 'Puxada',
	// 	weight: '70',
	// 	repetitions: '8',
	// 	series: '4',
	// },
	// {
	// 	id: 4,
	// 	name: 'Puxada',
	// 	weight: '70',
	// 	repetitions: '8',
	// 	series: '4',
	// },
	// {
	// 	id: 5,
	// 	name: 'Puxada',
	// 	weight: '70',
	// 	repetitions: '8',
	// 	series: '4',
	// },
	// {
	// 	id: 6,
	// 	name: 'Puxada',
	// 	weight: '70',
	// 	repetitions: '8',
	// 	series: '4',
	// },
	// {
	// 	id: 7,
	// 	name: 'Puxada',
	// 	weight: '70',
	// 	repetitions: '8',
	// 	series: '4',
	// },
]

const Workout: FunctionComponent<WorkoutProps> = () => {
	const [workoutList, setworkoutList] = useState(dados)
	const [selectedDate, setSelectedDate] = useState<Moment>()
	const [lastVolume, setLastVolume] = useState(999)

	const totalVolume = useMemo(
		() =>
			workoutList.reduce((acc, { repetitions, series, weight }) => {
				return acc + parseInt(series, 10) * parseInt(repetitions, 10) * parseInt(weight, 10)
			}, 0),
		[workoutList],
	)

	const handleDataChange = (date: Moment) => setSelectedDate(date)

	const showForm = () => {
		showModal(WorkoutForm, null)
	}

	const renderWorkout: ListRenderItem<WorkoutModel> = ({ item, index }) => (
		<WorkoutItem
			name={item.name}
			repetitions={item.repetitions}
			series={item.series}
			weight={item.weight}
			animationAdd={index * 200}
		/>
	)

	return (
		<ScrollView nestedScrollEnabled>
			<FlexContainer justifyContent='space-around' height={heightDP('40%')}>
				<FlexContainer>
					<Typography color='primary' fontSize={30}>
						Treino
					</Typography>
				</FlexContainer>
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
						calendarColor={'#f4d058'}
						calendarHeaderStyle={{ color: theme.palette.secondary.contrast, fontSize: 18 }}
						dateNumberStyle={{ color: theme.palette.secondary.contrast, fontSize: 20 }}
						dateNameStyle={{ color: theme.palette.secondary.contrast, fontSize: 13 }}
						iconContainer={{ flex: 0.1 }}
						onDateSelected={handleDataChange}
					/>
				</FlexContainerAnimated>
				<FlexContainer alignSelf='center' justifyContent='space-between' height='30%'>
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
				</FlexContainer>
			</FlexContainer>

			<FlatList nestedScrollEnabled data={dados} renderItem={renderWorkout} key='id' />

			{/* {dados.map((i, index) => (
				<WorkoutItem
					name={i.name}
					repetitions={i.repetitions}
					series={i.series}
					weight={i.weight}
					animationAdd={index * 200}
				/>
			))} */}

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
