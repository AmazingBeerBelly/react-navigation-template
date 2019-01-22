# react-navigation-template -- using react-navigation, redux, redux-persist, redex-thunk

### init steps:
1. npm install
2. eslint --init (using popular style -> choose airbnb style -> yes)

### eslint config (vscode preference setting workspace):

```
{
  "eslint.autoFixOnSave": true,
  "eslint.nodePath": "/usr/local/bin/node",
  "eslint.workingDirectories": ["/app/project"]
}
```

### modify eslint config file (my custom style)

```
module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx"]}],
        "class-methods-use-this": 0,
        "global-require": 0,
        "react/prop-types": 0,
        "max-len": ["error", {"code": 130, "tabWidth": 2}],
        "semi": ["error", "never"],
        "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
        "react/destructuring-assignment": [0, 'always'],
        "react/no-multi-comp": [0, { "ignoreStateless": false }],
        "import/prefer-default-export": "off"
    }
};
```