import { useNavigation } from '@react-navigation/native'
import { CardButton } from '../../components/CardButton'
import { FlexContainer } from '../../components/Container'
import { Typography } from '../../components/Typography'

export const Home = () => {
	const navigation = useNavigation()
	return (
		<FlexContainer height='100%' justifyContent='space-around' alignItems='stretch'>
			<CardButton text='Descanso' />
			<CardButton text='Nutrição' />
			<CardButton text='Treinamento' />
			<CardButton text='Descanso' />
		</FlexContainer>
	)
}
