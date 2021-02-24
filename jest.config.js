module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	moduleDirectories: [
		'node_modules',
		'src'
	],
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/node_modules/',
		'<rootDir>/public/'
	],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx}',
		'!<rootDir>/src/pages/api/*.js',
		'!<rootDir>/src/utils/constants/**/*.js',
		'!<rootDir>/src/pages/_app.jsx'
	]
}