module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        // base js recommended
        'eslint:recommended',
        // vue specific recommended
        'plugin:vue/vue3-recommended',
        // turn of eslint rules that will conflict with prettier
        'prettier',
        'prettier/vue',
    ],
};
