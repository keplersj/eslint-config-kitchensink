# eslint-config-kitchensink

Lints for everything but the kitchensink! Just another zero-config ESLint shared config attempt.

_This is probably a **really** bad idea.. You've been warned._

## Installation

Install `eslint`, `prettier`, and `eslint-config-kitchensink` in project:

```
npm i eslint prettier eslint-config-kitchensink
```

or

```
yarn add eslint prettier eslint-config-kitchensink
```

Add ESLint config to `package.json`:

```json
{
  "eslintConfig": {
    "extends": "kitchensink"
  }
}
```

## Features

The following is implemented and unlikely to change:

* Based around [eslint:recommended][eslint-rules]
* [Prettier-ESLint][npm-eslint-config-prettier] integration built in
* [Import lint rules][npm-eslint-plugin-import] built in
* [Promise lint rules][npm-eslint-plugin-promise]] built in
* [Unicorn lint rules][npm-eslint-plugin-unicorn] built in

The following is implemented, but might change:

* [node.js lint rules][npm-eslint-plugin-node] built in

## TODO

The following is planned but not yet implemented:

* TypeScript Detection and [Configuration][github-typescript-eslint-parser]
* Babel Detection and [Configuration][npm-babel-eslint]
* Flowtype Detection and [Configuration][npm-eslint-plugin-flowtype]
* React Detection and [Configuration][npm-eslint-plugin-react]
* React Native Detection and [Configuration][npm-eslint-plugin-react-native]
* Vue Detection and [Configuration][npm-eslint-plugin-vue]
* Jest Detection and [Configuration][npm-eslint-plugin-jest]
* Jasmine Detection and [Configuration][npm-eslint-plugin-jasmine]
* ✨ And more... ✨

## Prior Art

* [xo][github-xo] - _❤️ JavaScript happiness style linter_
* [standard][github-xo] - _🌟 JavaScript Style Guide, with linter & automatic code fixer_

[eslint-rules]: https://eslint.org/docs/rules/
[github-xo]: https://github.com/xojs/xo
[github-standard]: https://github.com/standard/standard
[github-typescript-eslint-parser]: https://github.com/eslint/typescript-eslint-parser
[npm-babel-eslint]: https://www.npmjs.com/package/babel-eslint
[npm-eslint-config-prettier]: https://www.npmjs.com/package/eslint-config-prettier
[npm-eslint-plugin-import]: https://www.npmjs.com/package/eslint-plugin-import/
[npm-eslint-plugin-node]: https://www.npmjs.com/package/eslint-plugin-node/
[npm-eslint-plugin-prettier]: https://www.npmjs.com/package/eslint-plugin-prettier/
[npm-eslint-plugin-promise]: https://www.npmjs.com/package/eslint-plugin-promise/
[npm-eslint-plugin-unicorn]: https://www.npmjs.com/package/eslint-plugin-unicorn/
[npm-eslint-plugin-flowtype]: https://www.npmjs.com/package/eslint-plugin-flowtype
[npm-eslint-plugin-react]: https://www.npmjs.com/package/eslint-plugin-react
[npm-eslint-plugin-react-native]: https://www.npmjs.com/package/eslint-plugin-react-native
[npm-eslint-plugin-vue]: https://www.npmjs.com/package/eslint-plugin-vue
[npm-eslint-plugin-jest]: https://www.npmjs.com/package/eslint-plugin-jest
[npm-eslint-plugin-jasmine]: https://www.npmjs.com/package/eslint-plugin-jasmine
