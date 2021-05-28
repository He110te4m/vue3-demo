module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        'plugin:vue/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/strongly-recommended',
        'plugin:vue/vue3-strongly-recommended',

        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'vue/custom-event-name-casing': 'off',
        'vue/html-indent': ['error', 4],
        'vue/no-multiple-template-root': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                    allowFirstLine: true
                },
                multiline: {
                    max: 1,
                    allowFirstLine: true
                }
            }
        ],
        'vue/html-self-closing': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',
        quotes: ['error', 'single'],
        'comma-dangle': ['error', 'never']
    }
};
