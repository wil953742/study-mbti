module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    camelcase: 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['functions', 'arrowFunctions', 'methods'] },
    ],
  },
};
