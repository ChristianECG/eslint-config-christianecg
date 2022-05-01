module.exports = {
	env: {
		es6: true,
		node: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'no-trailing-spaces': ['error'],
		'no-unused-vars': [
			'error',
			{
				args: 'none',
			},
		],
		'no-console': [
			'error',
			{
				allow: ['warn', 'error', 'info'],
			},
		],
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		'no-tabs': 0,
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'no-underscore-dangle': 0,
	},
}
