module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['plugin:vue/essential', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'no-var': 2,
        'no-alert': 2,
        'no-console': 1,
        'comma-dangle': 0,
        'space-before-function-paren': 0,
        'linebreak-style': 0,
        'import/no-unresolved': 0,
        'eslint-disable-next-line': 0,
        'arrow-body-style': 0,
        'import/prefer-default-export': 0,
        index: [4],
    },
};
