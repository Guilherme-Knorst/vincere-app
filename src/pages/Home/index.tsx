import { useNavigation } from '@react-navigation/native'
import { CardButton } from '../../components/CardButton'
import { FlexContainer } from '../../components/Container'
import { Typography } from '../../components/Typography'

export const Home = () => {
	const navigation = useNavigation()
	return (
		<FlexContainer
			height='90%'
			width='100%'
			flexDirection='column'
			flexWrap='wrap'
			justifyContent='space-around'
			alignItems='center'>
			<CardButton>
				<Typography gradient color='secondary' fontSize={16} bold uppercase>
					Propósito
				</Typography>
			</CardButton>
			<CardButton>
				<Typography gradient color='secondary' fontSize={16} bold uppercase>
					Descanso
				</Typography>
			</CardButton>
			<CardButton>
				<Typography gradient color='secondary' fontSize={16} bold uppercase>
					Nutrição
				</Typography>
			</CardButton>
			<CardButton>
				<Typography gradient color='secondary' fontSize={16} bold uppercase>
					Treinamento
				</Typography>
			</CardButton>
		</FlexContainer>
	)
}
