module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended'
      ],
      'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'parser': 'babel-eslint',
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'jsx-quotes': [
            'error', 
            'prefer-single'
        ],
        'react/prop-types': 0
    }
};