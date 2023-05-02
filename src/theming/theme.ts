import 'styled-components'
declare module 'styled-components' {
	type ThemeType = typeof theme

	export interface DefaultTheme extends ThemeType {}
}

export const theme = {
	typography: {
		size: {
			main: 16,
		},
		fontFamily: 'Helvetica Neue',
	},
	palette: {
		primary: {
			main: '#F2D259',
			contrast: '#FFF',
		},
		secondary: {
			main: '#FFF',
			contrast: '#14171a',
		},
		tertiary: {
			light: '#886bff',
			main: '#8930ff',
			dark: '#6128ff',
			contrast: '#00fffb',
		},
		body: {
			main: '#b2b2b2',
			contrast: '#14171a',
		},
		disabled: {
			main: '#ccc',
			contrast: '#7c7c7c',
		},
		error: {
			main: '#c44C4c',
			contrast: '#fff',
		},
		info: {
			main: '#6090ff',
			contrast: '#fff',
		},
		background: {
			main: '#000',
			contrast: '#212121',
		},
		footer: '#22272d',
		card: '#364454',
	},
}
