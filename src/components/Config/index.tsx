import { Button } from '../Button'
import { Typography } from '../Typography'
import { FlexContainer } from '../Container'
import { useAuth0 } from 'react-native-auth0'
import { DefaultScreenContainer } from '../DefaultScreenContainer'

interface ConfigProps {
	dismiss: () => void
}

export const Config = ({ dismiss }: ConfigProps) => {
	const { user, clearSession } = useAuth0()

	const handleLogout = async () => {
		await clearSession()
	}

	return (
		<>
			<Typography color='primary'>Bem vindo, {user?.name ?? user?.given_name}</Typography>
			<Button color='primary' size='medium' onPress={dismiss} width='40%'>
				Logout
			</Button>
		</>
	)
}
