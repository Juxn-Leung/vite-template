module.exports = {
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'warn',
    'vue/v-on-event-hyphenation': 'off',
    // 自定义
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'computed-property-spacing': ['error', 'never'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'rest-spread-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'spaced-comment': ['error', 'always'],
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-before-function-paren': ['error', 'always'],
    'space-before-blocks': ['error', 'always']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
