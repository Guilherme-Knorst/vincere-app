module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.jsx', '.js', '.json', '.tsx'],
				alias: {
					'@components': './src/components',
					'@config': './src/config',
					'@pages': './src/pages',
					'@services': './src/services',
					'@store': './src/store',
					'@styles': './src/styles',
					'@util': './src/util',
					'@contexts': './src/contexts',
				},
			},
		],
		[
			'@babel/plugin-transform-react-jsx',
			{
				runtime: 'automatic',
			},
		],
		'react-native-reanimated/plugin',
	],
}
