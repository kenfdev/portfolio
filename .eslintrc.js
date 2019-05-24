module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue'
  ],
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'typescript/no-triple-slash-reference': '',
    'typescript/interface-name-prefix': 'never',
    'typescript/explicit-member-accessibility': [true, 'no-public'],
    'typescript/no-var-requires': false,
    'typescript/no-triple-slash-reference': false,
    'typescript/no-use-before-define': 'nofunc',
    'no-var-requires': false,
    'require-jsdoc': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ]
  }
};
