module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 9,
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
			experimentalDecorators: true
		}
	},
	root: true,
	globals: {
		document: true,
		navigator: true,
		window: true,
		apiBaseURL: true
	},
	env: {
		browser: true,
		amd: true,
		node: true,
		es6: true
	},
	plugins: [
		'vue',
		'@typescript-eslint'
	],
	extends: ['plugin:vue/recommended'],
	rules: {
		'no-console': 1,
		'no-constant-condition': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty': 2,
		'no-ex-assign': 2,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 1,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 2,
		'no-unexpected-multiline': 1,
		'no-unreachable': 2,
		'no-unsafe-finally': 2,
		'no-unsafe-negation': 2,
		'use-isnan': 1,
		'valid-jsdoc': 0,
		'valid-typeof': 2,
		'array-callback-return': 1,
		'block-scoped-var': 1,
		'dot-notation': 2,
		'eqeqeq': [1, 'smart'],
		'no-alert': 2,
		'no-case-declarations': 2,
		'no-empty-function': 1,
		'no-empty-pattern': 2,
		'no-eq-null': 0,
		'no-eval': 2,
		'no-extra-bind': 2,
		'no-floating-decimal': 2,
		'no-global-assign': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 1,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-multi-spaces': 1,
		'no-redeclare': 2,
		'no-return-assign': 1,
		'no-self-assign': 1,
		'no-self-compare': 1,
		'no-throw-literal': 2,
		'no-unused-expressions': 1,
		'no-useless-call': 2,
		'no-useless-concat': 1,
		'no-useless-escape': 2,
		'no-useless-return': 2,
		'no-void': 2,
		'no-with': 2,
		'radix': [2, 'as-needed'],
		'require-await': 2,
		'yoda': 1,
		'no-catch-shadow': 2,
		'no-delete-var': 2,
		'no-shadow-restricted-names': 2,
		'no-undef': 0,
		'no-unused-vars': 0,
		'no-use-before-define': 2,
		'handle-callback-err': 1,
		'block-spacing': [1, 'always'],
		'brace-style': [1, 'stroustrup', { allowSingleLine: true }],
		'camelcase': 1,
		'comma-dangle': ['error', {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "never",
			"exports": "never",
			"functions": "ignore"
		}],
		'comma-spacing': 1,
		'comma-style': 1,
		'computed-property-spacing': 1,
		'func-call-spacing': 1,
		'func-style': [1, 'declaration', { allowArrowFunctions: true }],
		'indent': 0,
		'key-spacing': 1,
		'new-cap': 0,
		'new-parens': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-trailing-spaces': 2,
		'no-unneeded-ternary': 1,
		'no-whitespace-before-property': 1,
		'object-curly-spacing': [1, 'always', { arraysInObjects: false }],
		'one-var-declaration-per-line': 1,
		'operator-assignment': 1,
		'quote-props': [2, 'as-needed'],
		'quotes': [1, 'single', { allowTemplateLiterals: true }],
		'semi-spacing': 1,
		'semi': 2,
		'space-before-blocks': 1,
		'space-before-function-paren': [1, {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
		'space-in-parens': [1, 'never'],
		'space-infix-ops': 1,
		'space-unary-ops': [1, { words: true, nonwords: false }],
		'spaced-comment': 1,
		'arrow-spacing': 1,
		'no-class-assign': 2,
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-duplicate-imports': 2,
		'no-new-symbol': 2,
		'no-useless-computed-key': 2,
		'no-useless-constructor': 2,
		'no-useless-rename': 2,
		'object-shorthand': 1,
		'prefer-arrow-callback': 1,
		'require-yield': 2,
		'template-curly-spacing': 1,
		'@typescript-eslint/array-type': [2, 'array'],
		'@typescript-eslint/class-name-casing': 2,
		'@typescript-eslint/indent': [1, 'tab'],
		'@typescript-eslint/member-delimiter-style': [2, {
			multiline: { delimiter: 'semi', requireLast: true },
			singleline: { delimiter: 'comma', requireLast: false }
		}],
		'@typescript-eslint/no-array-constructor': 2,
		'@typescript-eslint/no-extraneous-class': 1,
		'@typescript-eslint/no-misused-new': 2,
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/no-use-before-define': 1,
		'vue/component-name-in-template-casing': [1, 'kebab-case'],
		'vue/script-indent': [1, 'tab', { baseIndent: 1 }],
		'vue/require-default-prop': 0
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 0,
				'@typescript-eslint/indent': 0
			}
		}
	]
};
