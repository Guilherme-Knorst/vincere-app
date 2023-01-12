import { useNavigation } from '@react-navigation/native'
import { CardButton } from '../../components/CardButton'
import { FlexContainer } from '../../components/Container'
import { Typography } from '../../components/Typography'
import defaultBackground from '../../../back1.jpg'

export const Home = () => {
	const navigation = useNavigation()
	//88.2 sem botao
	return (
		<FlexContainer backgrondColor='black' height='92.1%' flexJustifyContent='center'>
			<FlexContainer
				height='73%'
				alignSelf='center'
				flexDirection='column'
				flexWrap='wrap'
				flexJustifyContent='space-around'
				flexAlignItems='center'>
				<CardButton
					flexDirection='row'
					backgrondColor='#111111'
					flexAlignItems='center'
					flexJustifyContent='space-between'
					// height='15%'
					width='90%'
					borderRadius={20}>
					<Typography gradient color='secondary' fontSize={16} bold uppercase>
						Propósito
					</Typography>
				</CardButton>
				<CardButton
					flexDirection='row'
					backgrondColor='#111111'
					flexAlignItems='center'
					flexJustifyContent='space-between'
					// height='15%'
					width='90%'
					borderRadius={20}>
					<Typography gradient color='secondary' fontSize={16} bold uppercase>
						Descanso
					</Typography>
				</CardButton>
				<CardButton
					flexDirection='row'
					backgrondColor='#111111'
					flexAlignItems='center'
					flexJustifyContent='space-between'
					// height='15%'
					width='90%'
					borderRadius={20}>
					<Typography gradient color='secondary' fontSize={16} bold uppercase>
						Nutrição
					</Typography>
				</CardButton>
				<CardButton
					flexDirection='row'
					backgrondColor='#111111'
					flexAlignItems='center'
					flexJustifyContent='space-between'
					// height='15%'
					width='90%'
					borderRadius={20}>
					<Typography gradient color='secondary' fontSize={16} bold uppercase>
						Treinamento
					</Typography>
				</CardButton>
				{/* <CardButton
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
				</CardButton> */}
			</FlexContainer>
		</FlexContainer>
	)
}
