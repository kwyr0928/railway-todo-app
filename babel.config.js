module.exports = {
    presets: ['react-app',
    "@babel/preset-env",
    "@babel/preset-react"
    ],
    plugins: [
      '@babel/plugin-transform-class-properties',
      '@babel/plugin-transform-nullish-coalescing-operator',
      '@babel/plugin-transform-private-methods',
      '@babel/plugin-transform-optional-chaining',
      '@babel/plugin-transform-numeric-separator'
    ]
  };
  