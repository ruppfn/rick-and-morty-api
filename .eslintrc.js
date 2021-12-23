module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jest',
    ],
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:jest/recommended',
    ],
    parserOptions: {
        project: './tsconfig.json'
    }
};
