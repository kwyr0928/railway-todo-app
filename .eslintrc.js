module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // TypeScript用設定を追加
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  // TypeScript用プラグインを追加
  plugins: ['react'],
  rules: {
    // React17から不要になった import React from 'react'; に対応
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['build/', 'public/,', '**/node_modules/', '*.config.js', '.*lintrc.js', '/*.*'],
};
