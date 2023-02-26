module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"],
    parser: '@babel/eslint-parser',
  },
  plugins: ['vue'],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
  }
}
