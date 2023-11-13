// .eslintrc.cjs
module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    // 'plugin:react/recommended',
    // 'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    quotes: [1, 'single'],
    'prettier/prettier': 'error', // Ensure this line is present
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
