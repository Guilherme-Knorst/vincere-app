import { useNavigation } from '@react-navigation/native'
import { CardButton } from '../../components/CardButton'
import { FlexContainer } from '../../components/Container'
import { Typography } from '../../components/Typography'
import defaultBackground from '../../../back1.jpg'

export const Home = () => {
	const navigation = useNavigation()

	return (
		<FlexContainer source={defaultBackground} height='83%' flexJustifyContent='center'>
			<FlexContainer
				height='73%'
				alignSelf='center'
				flexDirection='row'
				flexWrap='wrap'
				flexAlignContent='space-between'
				flexJustifyContent='space-around'>
				<CardButton
					flexDirection='column'
					backgrondColor='transparent'
					flexAlignItems='center'
					height='35%'
					width='40%'
					borderRadius={20}>
					<Typography gradient color='secondary' fontSize={16} bold uppercase>
						Propósito
					</Typography>
				</CardButton>
				<CardButton
					flexDirection='column'
					backgrondColor='transparent'
					flexAlignItems='center'
					height='35%'
					width='40%'
					borderRadius={20}>
					<Typography gradient color='secondary' fontSize={16} bold uppercase>
						Descanso
					</Typography>
				</CardButton>
				<CardButton
					flexDirection='column'
					backgrondColor='transparent'
					flexAlignItems='center'
					height='35%'
					width='40%'
					borderRadius={20}>
					<Typography gradient color='secondary' fontSize={16} bold uppercase>
						Nutrição
					</Typography>
				</CardButton>
				<CardButton
					flexDirection='column'
					backgrondColor='transparent'
					flexAlignItems='center'
					height='35%'
					width='40%'
					borderRadius={20}>
					<Typography gradient color='secondary' fontSize={16} bold uppercase>
						Treinamento
					</Typography>
				</CardButton>
			</FlexContainer>
		</FlexContainer>
	)
}
