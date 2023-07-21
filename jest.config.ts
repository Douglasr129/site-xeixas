/* eslint-disable import/no-anonymous-default-export */
export default {
	setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/templates/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/contexts/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/graphql/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/components/Comments/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/shared-types/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/shared-typed/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
		'!<rootDir>/**/*.stories.{js,jsx,ts,tsx}',
		'!<rootDir>/node_modules/',
	],
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	testEnvironment: 'jsdom',
	coverageDirectory: '<rootDir>/coverage',
	preset: 'ts-jest',
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
	},
	testTimeout: 10000,
};
