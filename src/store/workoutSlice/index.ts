import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { WorkoutModel } from '../../models/workout'
import { ExerciseCategory, ExerciseModel } from '../../models/exercise'
import { RootState } from '..'
import { useSelector } from 'react-redux'

interface WorkoutState {
	weekDays: string[]
	workoutsTemplate: WorkoutModel[]
	completedWorkouts: WorkoutModel[]
	exercisesTemplate: ExerciseModel[]
	categories: ExerciseCategory[]
}

const initialState: WorkoutState = {
	weekDays: moment.weekdays(true),
	categories: [
		{ id: 1, name: 'Costas' },
		{ id: 2, name: 'Pernas' },
		{ id: 3, name: 'Peitos' },
	],
	workoutsTemplate: [
		{
			id: 1,
			completedDate: null,
			workoutVolume: 0,
			name: 'Costas',
			exerciseNumber: 0,
			dayOfWeek: 'Segunda',
			exercises: [
				{
					id: 1,
					category: { id: 1, name: 'Costas' },
					name: 'Puxada',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 2,
					category: { id: 1, name: 'Costas' },
					name: 'Remada',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 3,
					category: { id: 1, name: 'Costas' },
					name: 'Serrote',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 4,
					category: { id: 1, name: 'Costas' },
					name: 'Barra Híbrida',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
			],
		},
		{
			id: 2,
			completedDate: null,
			workoutVolume: 0,
			name: 'Peitos',
			exerciseNumber: 0,
			dayOfWeek: 'Terça',
			exercises: [
				{
					id: 5,
					category: { id: 3, name: 'Peitos' },
					name: 'Supino Barra',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 6,
					category: { id: 3, name: 'Peitos' },
					name: 'Supino Halteres',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 7,
					category: { id: 3, name: 'Peitos' },
					name: 'Voador',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 8,
					category: { id: 3, name: 'Peitos' },
					name: 'Cross Over',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 9,
					category: { id: 3, name: 'Peitos' },
					name: 'Flexão',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
			],
		},
		{
			id: 3,
			completedDate: null,
			workoutVolume: 0,
			name: 'Pernas',
			exerciseNumber: 0,
			dayOfWeek: 'Quarta',
			exercises: [
				{
					id: 10,
					category: { id: 3, name: 'Peitos' },
					name: 'Supino Barra',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 11,
					category: { id: 3, name: 'Peitos' },
					name: 'Supino Halteres',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 12,
					category: { id: 3, name: 'Peitos' },
					name: 'Voador',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 13,
					category: { id: 3, name: 'Peitos' },
					name: 'Cross Over',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
				{
					id: 14,
					category: { id: 3, name: 'Peitos' },
					name: 'Flexão',
					series: [
						{
							weight: 50,
							repetitions: 10,
						},
					],
				},
			],
		},
	],
	exercisesTemplate: [
		{
			id: 1,
			category: { id: 1, name: 'Costas' },
			name: 'Puxada',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
		{
			id: 2,
			category: { id: 1, name: 'Costas' },
			name: 'Remada',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
		{
			id: 3,
			category: { id: 1, name: 'Costas' },
			name: 'Serrote',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
		{
			id: 4,
			category: { id: 1, name: 'Costas' },
			name: 'Barra Híbrida',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
		{
			id: 5,
			category: { id: 2, name: 'Peitos' },
			name: 'Supino Barra',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
		{
			id: 6,
			category: { id: 2, name: 'Peitos' },
			name: 'Supino Halteres',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
		{
			id: 7,
			category: { id: 2, name: 'Peitos' },
			name: 'Voador',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
		{
			id: 8,
			category: { id: 2, name: 'Peitos' },
			name: 'Cross Over',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
		{
			id: 9,
			category: { id: 2, name: 'Peitos' },
			name: 'Flexão',
			series: [
				{
					weight: 50,
					repetitions: 10,
				},
			],
		},
	],
	completedWorkouts: [],
}

export const workoutSlice = createSlice({
	name: 'workout',
	initialState,
	reducers: {
		updateWorkout: (state, action: PayloadAction<WorkoutModel>) => {
			state.workoutsTemplate = state.workoutsTemplate.map(w =>
				w.id === action.payload.id ? action.payload : w,
			)
		},
		completeWorkout: state => {},
		uncompleteWorkout: state => {},
	},
})

// Action creators are generated for each case reducer function
export const { updateWorkout, completeWorkout, uncompleteWorkout } = workoutSlice.actions

// export const selectWorkoutTemplates = (state: RootState) => state.workout.workoutsTemplate

export const makeSelectWorkoutByDay = (dayOfWeek: string) => {
	const selectWorkoutByDay = createSelector(
		(state: RootState) => state.workout.workoutsTemplate, // the first argument accesses relevant data from global state
		workoutsTemplate => workoutsTemplate.filter(workout => workout.dayOfWeek === dayOfWeek)[0], // the second parameter conducts the transformation
	)
	return selectWorkoutByDay
}

export const useExerciseCategories = () =>
	useSelector((state: RootState) => state.workout.categories)

// export const totalVolume = createSelector(selectWorkoutTemplates, (wt: WorkoutModel) => {
// 	return wt.reduce((acc, { series }) => {
// 		return (
// 			acc +
// 			series.reduce((acc2, { repetitions, weight }) => {
// 				return acc2 + repetitions * weight
// 			}, 0)
// 		)
// 	}, 0)
// })

export default workoutSlice.reducer
