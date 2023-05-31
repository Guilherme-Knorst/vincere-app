import { FunctionComponent, useState } from 'react'
import { FlexContainer, FlexContainerAnimated } from '../Container'
import { Typography } from '../Typography'
import TextInput from '../TextInput'
import { LightSpeedInRight } from 'react-native-reanimated'
import { useTheme } from 'styled-components/native'
import { WorkoutModel } from '../../models/workout'
import { TouchableOpacity } from 'react-native'
import NumberScrollPicker from '../NumberScrollPicker'

interface WorkoutItemProps extends WorkoutModel {
	animationAdd?: number
}

const WorkoutItem: FunctionComponent<WorkoutItemProps> = ({
	name,
	repetitions,
	series,
	weight,
	animationAdd = 0,
}) => {
	const theme = useTheme()
	const [exercise, setExercise] = useState({ repetitions, series, weight })
	const onChangeExercise = (value: string) => console.log(value)
	return (
		// <TouchableOpacity style={{ marginTop: 20 }}>
		<FlexContainerAnimated
			entering={LightSpeedInRight.duration(animationAdd + 500)}
			gradientBorderRadius={20}
			marginTop={20}
			padding={20}
			gradient
			// backgroundColor={theme.palette.card}
		>
			<FlexContainer
				border
				borderRadius={20}
				paddingTop={10}
				paddingBottom={10}
				paddingLeft={20}
				paddingRight={20}
				flexDirection='row'
				justifyContent='center'
				backgroundColor={theme.palette.background.contrast}>
				<Typography fontSize={23} gradient bold>
					{name}
				</Typography>
			</FlexContainer>
			<FlexContainer marginTop={10}>
				<NumberScrollPicker
					config={[
						{ label: 'Séries', min: 0, max: 9, value: 3 },
						{ label: 'Repetições', min: 0, max: 100, value: 3 },
						{ label: 'Carga', min: 0, max: 700, value: 3 },
					]}
					onChange={onChangeExercise}
					// height='50%'
				/>
				{/* <TextInput textAlign='center' value={series} keyboardType='decimal-pad' label='Séries' />
					<TextInput
						textAlign='center'
						value={repetitions}
						keyboardType='decimal-pad'
						label='Repetições'
					/>
					<TextInput textAlign='center' value={weight} keyboardType='decimal-pad' label='Carga' /> */}
			</FlexContainer>
			<FlexContainer alignSelf='center' marginTop={20}>
				<Typography color='secondary' fontSize={23} bold>
					Volume{' '}
					{(parseInt(series, 10) * parseInt(repetitions, 10) * parseInt(weight, 10)).toString()} vs
					98
				</Typography>
			</FlexContainer>
		</FlexContainerAnimated>
		// </TouchableOpacity>
	)
}

export default WorkoutItem
