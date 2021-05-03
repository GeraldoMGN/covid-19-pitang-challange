module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'testing-library',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      controlComponents: ['Field'],
    }],
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
      ],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
