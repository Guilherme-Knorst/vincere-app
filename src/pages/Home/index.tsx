import { useNavigation } from '@react-navigation/native'
import { CardButton } from '../../components/CardButton'
import { FlexContainer } from '../../components/Container'
import { DefaultScreenContainerBackground } from '../../components/DefaultScreenContainer'
import { GradientContainer } from '../../components/LinearGradient'
import { Typography } from '../../components/Typography'

export const Home = () => {
	const navigation = useNavigation()

	return (
		<GradientContainer>
			<FlexContainer flexDirection='row' flexWrap='wrap'>
				{/* <CardButton color='primary' size='large'>
					<Typography color='secondary' fontSize={26}>
						Propósito
					</Typography>
				</CardButton>
				<CardButton color='primary' size='large'>
					<Typography color='primary' fontSize={26}>
						Descanso
					</Typography>
				</CardButton>
				<CardButton color='primary' size='large'>
					<Typography color='primary' fontSize={26}>
						Nutrição
					</Typography>
				</CardButton>
				<CardButton color='primary' size='large'>
					<Typography color='primary' fontSize={26}>
						Treinamento
					</Typography>
				</CardButton> */}
			</FlexContainer>
		</GradientContainer>
	)
}
