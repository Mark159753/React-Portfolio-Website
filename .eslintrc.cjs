module.exports = {
  root: true,
  env: { browser: true, es5: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // Ensure React rules are included
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Specify the ECMAScript version
    sourceType: 'module', // Enable ES modules
  },
  plugins: ['react', 'react-refresh'], // Add 'react' plugin
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off', // Disable prop-types if you're using TypeScript
  },
};

