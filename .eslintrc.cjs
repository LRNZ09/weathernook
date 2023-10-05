module.exports = {
  extends: [
    'eslint:recommended',
    'universe',
    'universe/shared/typescript-analysis',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'prettier.config.js',
    'vite.config.ts',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  root: true,
  rules: {
    'no-void': ['error', { allowAsStatement: true }],
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
  settings: {
    react: { version: 'detect' },
  },
}
