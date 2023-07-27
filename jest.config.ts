/* eslint-disable import/no-anonymous-default-export */
module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/styles/*.ts(x)?',
		'!src/**/*stories.ts(x)?',
		'!src/**/pages/_*.ts(x)?',
		'!src/**/pages/index.ts(x)?',
	],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	modulePaths: ['<rootDir>/src/'],
};
