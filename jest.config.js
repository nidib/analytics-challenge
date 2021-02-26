module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js'
	},
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
};