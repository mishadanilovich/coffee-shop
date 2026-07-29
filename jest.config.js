const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './'
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/core/(.*)$': '<rootDir>/core/$1',
		'^@/(.*)$': '<rootDir>/src/$1',
		'^swiper/css.*$': '<rootDir>/__mocks__/styleMock.js'
	}
};

module.exports = createJestConfig(customJestConfig);
