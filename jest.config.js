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
		'!<rootDir>/src/Pages/api/*.js',
		'!<rootDir>/src/Utils/constants/**/*.js',
		'!<rootDir>/src/Pages/_app.jsx'
	]
}