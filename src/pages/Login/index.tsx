import { FlexContainer } from '../../components/Container'
import defaultBackground from '../../../back2.jpg'
import { useAuth0 } from 'react-native-auth0'
import { heightDP } from '../../utils'
import { Button } from '../../components/Button'

export const Login = () => {
	const { authorize } = useAuth0()

	const handleSubmit = async () => {
		await authorize({ scope: 'openid profile email ', ui_locales: 'pt-BR' })
	}

	return (
		<FlexContainer
			backgroundImageSource={defaultBackground}
			height={heightDP('100%')}
			flexDirection='column'
			alignItems='center'
			justifyContent='flex-end'>
			<FlexContainer height='15%'>
				<Button color='primary' size='large' fontSize={13} onPress={handleSubmit} bold>
					Você está realmente preparado?
				</Button>
			</FlexContainer>
		</FlexContainer>
	)
}
