import { StatusBar } from 'react-native'
import { auth0 } from '../../config/auth0'
import { LogoImage } from '../../components/LogoImage'
import { Typography } from '../../components/Typography'
import { pixelToDP } from '../../utils'
import { useAppDispatch } from '../../store/hooks'
import { login } from '../../store/authSlice'
import { GradientButton } from '../../components/Gradient/GradientButton'
import { FlexContainer } from '../../components/Container'
import defaultBackground from '../../../back1.jpg'

export const Login = () => {
	const dispatch = useAppDispatch()

	const handleSubmit = async () => {
		await auth0.webAuth
			.authorize({ scope: 'openid profile email ', ui_locales: 'pt-BR' })
			.then(credentials => {
				dispatch(login(credentials))
			})
			.catch()
	}

	return (
		<FlexContainer
			source={defaultBackground}
			height='100%'
			flexDirection='column'
			flexAlignItems='center'
			flexJustifyContent='space-around'>
			<StatusBar barStyle='light-content' backgroundColor='#000' />
			<LogoImage />
			<Typography
				lineHeight={30}
				color='primary'
				align='center'
				bold
				fontSize={pixelToDP(16)}
				gradient>
				Destranque sua maior transformação através do poder de um novo estilo de vida
			</Typography>
			<GradientButton color='primary' size='large' onPress={handleSubmit} bold uppercase>
				Entrar
			</GradientButton>
		</FlexContainer>
	)
}
