/**
 * @format
 */

import { LogBox } from 'react-native'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import moment from 'moment'
import 'moment/locale/pt-br'

const ignoreWarns = [
	'Prevent',
	'EventEmitter.removeListener',
	'[fuego-swr-keys-from-collection-path]',
	'Setting a timer for a long period of time',
	'ViewPropTypes will be removed from React Native',
	'AsyncStorage has been extracted from react-native',
	"exported from 'deprecated-react-native-prop-types'.",
	'Non-serializable values were found in the navigation state.',
	'VirtualizedLists should never be nested inside plain ScrollViews',
	'Expected',
]

const { warn } = console
console.warn = (...arg) => {
	// eslint-disable-next-line no-restricted-syntax
	for (const warning of ignoreWarns) {
		if (arg[0].startsWith(warning)) {
			return
		}
	}
	warn(...arg)
}

LogBox.ignoreLogs(ignoreWarns)

moment.updateLocale('pt-br', {
	relativeTime: {
		future: 'Em %s',
		past: 'Há %s',
		s: 'instantes',
		m: '1 minuto',
		mm: '%d minutos',
		MM: '%d meses',
		M: '1 mês',
		h: '1 hora',
		hh: '%d horas',
		dd: '%d dias',
		d: '1 dia',
		y: '1 ano',
		yy: '%d anos',
	},
	months: [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	],
	weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
})
AppRegistry.registerComponent(appName, () => App)
