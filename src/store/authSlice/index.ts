import { createSlice } from '@reduxjs/toolkit'
import { Credentials } from 'react-native-auth0'

interface AuthState {
	credentials: Credentials | null
	isLogged: boolean
	isRegistred: boolean
}

const initialState: AuthState = {
	credentials: null,
	isLogged: true,
	isRegistred: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.credentials = action.payload
			state.isLogged = true
		},
		logout: state => {
			state.credentials = null
			state.isLogged = false
			state.isRegistred = false
		},
	},
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
