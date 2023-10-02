module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'prettier.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  root: true,
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'React.FC':
            'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
          'React.FunctionComponent':
            'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
        },
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
