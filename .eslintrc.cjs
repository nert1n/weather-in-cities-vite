module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	parser: "@typescript-eslint/parser",
	plugins: [
		"sort-destructure-keys",
		"react-refresh",
		"prettier",
		"import",
		"jsx-a11y",
		"react",
		"promise",
		"optimize-regex",
		"unicorn",
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:security/recommended-legacy",
		"plugin:sonarjs/recommended-legacy",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules"],
	rules: {
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"react/jsx-sort-props": [
			"error",
			{
				callbacksLast: true,
				shorthandFirst: true,
				ignoreCase: true,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],

		"sort-destructure-keys/sort-destructure-keys": [
			"error",
			{
				caseSensitive: false,
			},
		],

		"security/detect-object-injection": "off",
		"sonarjs/todo-tag": "off",
		"promise/always-return": "error",
		"promise/no-return-wrap": "error",
		"promise/param-names": "error",
		"promise/catch-or-return": "error",
		"optimize-regex/optimize-regex": "warn",
		"unicorn/no-abusive-eslint-disable": "error",
		"unicorn/prefer-query-selector": "error",
		"unicorn/filename-case": ["error", { case: "kebabCase" }],
		"linebreak-style": ["off"],
		"prettier/prettier": "error",
		"react-hooks/exhaustive-deps": "off",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"import/order": [
			"error",
			{
				groups: [
					["builtin", "external"],
					"internal",
					["parent", "sibling", "index"],
					"object",
				],
				"newlines-between": "always",
				alphabetize: { order: "asc", caseInsensitive: true },
			},
		],
		"jsx-a11y/anchor-is-valid": "warn",
		"jsx-a11y/alt-text": "error",
		"react/jsx-uses-react": "error",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/no-autofocus": "error",
		"react/jsx-no-useless-fragment": "error",
		"object-curly-newline": ["off", { multiline: true }],
		"no-restricted-imports": [
			"error",
			{
				paths: ["lodash", "moment"],
				patterns: ["@/old/**"],
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
		typescript: {},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: "./tsconfig.json",
			},
		},
	},
};
