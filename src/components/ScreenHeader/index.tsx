import { widthDP, heightDP } from '../../utils'
import styled from 'styled-components/native'
import { Button } from '../Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { logout } from '../../store/authSlice'
import { auth0 } from '../../config/auth0'
import { Typography } from '../Typography'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { FlexContainer } from '../Container'

const Container = styled.View`
	flex-direction: row;
	background-color: black;
	/* border: 1px solid red; */
	width: ${widthDP('100%')};
	justify-content: space-around;
	align-items: center;
	height: ${heightDP('10%')};
`

interface Identification {
	iss?: string
	sub?: string
	aud?: string
	exp?: number
	iat?: number
	name?: string
	given_name?: string
	family_name?: string
	gender?: string
	birthdate?: string
	email?: string
	picture?: string
}

export const ScreenHeader = () => {
	const credentials = useAppSelector(state => state.auth.credentials)
	const [identification, setIdentification] = useState<Identification | null>(null)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (credentials?.idToken) setIdentification(jwtDecode(credentials.idToken))
	}, [credentials])

	const handleLogout = async () => {
		await auth0.webAuth.clearSession({})
		dispatch(logout())
	}

	return (
		<FlexContainer
			height='10%'
			width='100%'
			backgrondColor='black'
			flexDirection='row'
			flexJustifyContent='space-around'
			flexAlignItems='center'>
			<Typography width='80%' color='primary'>
				Bem vindo, {identification?.name}
			</Typography>
			<Button color='primary' size='small' onPress={handleLogout} width='20%'>
				Logout
			</Button>
		</FlexContainer>
	)
}
