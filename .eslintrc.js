module.exports = {
	root: true,
	extends: [
		'@react-native-community',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'no-shadow': 'off',
				'no-undef': 'off',
				'prettier/prettier': 'error',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-empty-interface': 'off',
			},
		},
	],
}
