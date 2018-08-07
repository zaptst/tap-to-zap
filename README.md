# zap-to-zap

> Convert TAP to [ZAP](https://github.com/zaptst/zap)

## Install

```sh
yarn add [--global] tap-to-zap
```

## Example

```sh
... | tap-to-zap
```

```js
const tapToZap = require('tap-to-zap');

process.stdin
  .pipe(tapToZap.stream())
  .pipe(process.stdout);

tapToZap('tap output'); // "zap output"
```
