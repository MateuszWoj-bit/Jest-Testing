module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // This tells Jest to use babel-jest for JS/JSX files
    },
    testEnvironment: 'jsdom', // Optional, if you are testing React components
  };
  