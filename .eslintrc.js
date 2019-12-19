module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/require-component-is': 'off',
    'vue/no-unused-components': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'off',
    'no-use-before-define': 'off',
    'no-useless-return': 'off'
  }
}
