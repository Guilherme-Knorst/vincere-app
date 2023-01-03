import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import {
	Text,
	Image,
	StyleSheet,
	Dimensions,
	ImageBackground,
	StatusBar,
	Button,
} from 'react-native'
import { Credentials } from 'react-native-auth0'
import { auth0 } from '../../config/auth0'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		paddingHorizontal: 20,
	},
	fileName: {
		fontWeight: 'bold',
		marginTop: 5,
	},
	instructions: {
		color: '#DDD',
		fontSize: 14,
		marginTop: 20,
		textAlign: 'center',
	},
	logo: {
		height: Dimensions.get('window').height * 0.11,
		marginVertical: Dimensions.get('window').height * 0.11,
		width: Dimensions.get('window').height * 0.11 * (1950 / 662),
	},
	welcome: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

const Login = () => {
	const [cred, setCred] = useState<Credentials>()

	// useEffect(() => {
	// 	;(async () => {
	// 		cred && (await auth0.users(cred.idToken).getUser())
	// 	})()
	// }, [cred])

	const handleSubmit = async () => {
		await auth0.webAuth
			.authorize({ scope: 'openid profile email ', ui_locales: 'pt-BR' })
			.then(cr => setCred(cr))
			.catch(error => console.log(error))
	}

	const handleLogout = () => {
		auth0.webAuth.clearSession({})
	}

	if (cred)
		return (
			<ImageBackground
				source={{
					uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
				}}
				style={styles.container}
				resizeMode='cover'>
				<StatusBar barStyle='light-content' backgroundColor='#7159c1' />
				<Image
					source={{
						uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
					}}
					style={styles.logo}
					resizeMode='contain'
				/>
				<Text style={styles.welcome}>LOGADO {JSON.stringify(jwtDecode(cred.idToken))}</Text>
				<Button onPress={handleLogout} title='Sair' />
			</ImageBackground>
		)

	return (
		<ImageBackground
			source={{
				uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
			}}
			style={styles.container}
			resizeMode='cover'>
			<StatusBar barStyle='light-content' backgroundColor='#7159c1' />
			<Image
				source={{
					uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
				}}
				style={styles.logo}
				resizeMode='contain'
			/>
			<Text style={styles.welcome}>Login</Text>
			<Button onPress={handleSubmit} title='Entrar' />
		</ImageBackground>
	)
}

export default Login
