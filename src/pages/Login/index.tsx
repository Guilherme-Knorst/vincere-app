import { ActivityIndicator, StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { DefaultScreenContainerBackground } from '../../components/DefaultScreenContainer'
import { auth0 } from '../../config/auth0'
import { LogoImage } from '../../components/LogoImage'
import { Typography } from '../../components/Typography'
import { pixelToDP } from '../../utils'
import { useAppDispatch } from '../../store/hooks'
import { login } from '../../store/authSlice'
import { GradientButton } from '../../components/Gradient/GradientButton'

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
		<DefaultScreenContainerBackground>
			<StatusBar barStyle='light-content' backgroundColor='#000' />
			<LogoImage />
			<Typography color='primary' align='center' bold fontSize={pixelToDP(16)} gradient>
				Destranque sua maior transformação através do poder de um novo estilo de vida
			</Typography>
			<GradientButton color='primary' size='large' onPress={handleSubmit} bold uppercase>
				Entrar
			</GradientButton>
		</DefaultScreenContainerBackground>
	)
}
