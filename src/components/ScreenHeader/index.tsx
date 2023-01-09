import { widthDP, heightDP } from '../../utils'
import styled from 'styled-components/native'
import { Button } from '../Button'
import { useAppDispatch } from '../../store/hooks'
import { logout } from '../../store/authSlice'
import { auth0 } from '../../config/auth0'

export interface ScreenHeaderProps {}

const Container = styled.View`
	flex-direction: row;
	background-color: black;
	width: ${widthDP('98%')};
	justify-content: flex-end;
	align-items: center;
	height: ${heightDP('10%')};
`

export const ScreenHeader = () => {
	const dispatch = useAppDispatch()

	const handleLogout = async () => {
		await auth0.webAuth.clearSession({})
		dispatch(logout())
	}

	return (
		<Container>
			<Button color='primary' size='small' onPress={handleLogout}>
				Logout
			</Button>
		</Container>
	)
}
