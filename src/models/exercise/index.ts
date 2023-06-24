export interface ExerciseSerie {
	[key: string]: number
	id: number
	repetitions: number
	weight: number
}

export interface ExerciseCategory {
	id: number
	name: string
}

export interface ExerciseModel {
	series: ExerciseSerie[]
	category: ExerciseCategory
	name: string
	id: number
}
