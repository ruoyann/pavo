module.exports = {
    'env': {
        'node': true,
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'indent': [
            'warn',
            2
        ],
        'linebreak-style': [
            'warn',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        "eqeqeq": "warn",
        "no-trailing-spaces": "warn",
        "arrow-spacing": [
            "warn", { "before": true, "after": true }
        ],
    }
}
