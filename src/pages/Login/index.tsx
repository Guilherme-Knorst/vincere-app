import { StatusBar } from 'react-native'
import { GradientButton } from '../../components/Gradient/GradientButton'
import { FlexContainer } from '../../components/Container'
import defaultBackground from '../../../back2.jpg'
import { useAuth0 } from 'react-native-auth0'
import { heightDP } from '../../utils'

export const Login = () => {
	const { authorize } = useAuth0()

	const handleSubmit = async () => {
		await authorize({ scope: 'openid profile email ', ui_locales: 'pt-BR' })
	}

	return (
		<FlexContainer
			backgroundImageSource={defaultBackground}
			height='106.1%'
			flexDirection='column'
			alignItems='center'
			justifyContent='flex-end'>
			{/* <StatusBar barStyle='light-content' backgroundColor='#F2D259' /> */}
			{/* <LogoImage /> */}
			{/* <Typography
				lineHeight={30}
				color='primary'
				align='center'
				bold
				fontSize={pixelToDP(16)}
				gradient>
				Destranque sua maior transformação através do poder de um novo estilo de vida
			</Typography> */}
			<GradientButton color='primary' size='large' fontSize={13} onPress={handleSubmit} bold>
				Você está realmente preparado?
			</GradientButton>
		</FlexContainer>
	)
}
