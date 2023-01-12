module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/function-component-definition": "off",
        "import/prefer-default-export": "off",
        "import/no-default-export": "off",
        "react/no-unused-prop-types": "off",
        "implicit-arrow-linebreak": "off",
        "react/prop-types": "off",
        "no-nested-ternary": "off",
        "consistent-return": "off",
        "max-len": "off",
        "array-callback-return": "off",
        "no-param-reassign": "off",
        "no-return-assign": "off",
        "no-unused-vars": "off",
        "no-shadow": "off",
        "indent": [
            "error",
            2
        ],
        "quotes": [
            2,
            "double",
            {
                "avoidEscape": true
            }
        ],
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "react/jsx-filename-extension": [
            2,
            {
                "extensions": [
                    ".js", ".jsx", ".ts", ".tsx"
                ]
            }
        ],
    },
}
