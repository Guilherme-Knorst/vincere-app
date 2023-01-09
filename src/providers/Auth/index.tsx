import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { Credentials } from 'react-native-auth0'

interface AuthState {
	credentials: Credentials | null
	isSignedIn: boolean
	isRegistred: boolean
}

interface SetState {
	(payload: Partial<AuthState>): void
}

interface AuthProviderProps {
	authState: Partial<AuthState>
	updateAuthState: SetState
}

const initialState: AuthState = {
	credentials: null,
	isSignedIn: false,
	isRegistred: false,
}

const AuthContext = createContext<AuthProviderProps>({
	authState: initialState,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateAuthState: () => {},
})

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [state, setState] = useState<Partial<AuthState>>(initialState)

	// useEffect(() => {
	// 	const uconfig = localStorage.getItem('uconfig')
	// 	if (uconfig) {
	// 		setConfig(JSON.parse(uconfig))
	// 	}
	// }, [])

	// useEffect(() => {
	// 	localStorage.setItem('uconfig', JSON.stringify(config))
	// }, [config])

	const updateAuthState: SetState = (payload: Partial<AuthState>) => {
		setState({ ...state, ...payload })
	}

	return (
		<AuthContext.Provider value={{ authState: state, updateAuthState }}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider }

export function useAuth() {
	return useContext(AuthContext)
}
