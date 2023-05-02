import { Button } from '../Button'
import { Typography } from '../Typography'
import { FlexContainer } from '../Container'
import { useAuth0 } from 'react-native-auth0'
import { showModal } from '@whitespectre/rn-modal-presenter'
import { Config } from '../Config'
import { heightDP } from '../../utils'

export const ScreenHeader = () => {
	const { user, clearSession } = useAuth0()

	const handleLogout = async () => {
		await clearSession()
	}

	const showConfig = () => showModal(Config, null)

	return (
		<FlexContainer flexDirection='row' justifyContent='space-around' alignItems='center'>
			<Typography color='primary'>Bem vindo, {user?.name ?? user?.given_name}</Typography>
			<Button color='primary' size='medium' onPress={showConfig} width='40%'>
				Configurações
			</Button>
		</FlexContainer>
	)
}
