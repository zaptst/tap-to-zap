#!/usr/bin/env node
'use strict';
const meow = require('meow');
const tapToZap = require('./');

const cli = meow({
  help: `
    Usage
      $ ... | tap-to-zap
  `,
});

process.stdin
  .pipe(tapToZap.stream())
  .pipe(process.stdout);
