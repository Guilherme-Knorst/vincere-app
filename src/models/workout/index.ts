import { ExerciseModel } from '../exercise'

export interface WorkoutSerie {
	repetitions: number
	weight: number
}

export interface WorkoutModel {
	completedDate: number | null
	exercises: ExerciseModel[]
	exerciseNumber: number
	workoutVolume: number
	dayOfWeek: 'Domingo' | 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta' | 'Sábado'
	name: string
	id?: number
}
