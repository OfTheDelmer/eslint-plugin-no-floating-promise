# Examples

Quick demo of the plugin change, and assumes it uses an npm link to the plugin.

```bash
npm link && cd examples/eslint-plugin-example && npm link eslint-plugin-no-floating-promise
```

Then run the lint command:

```bash
$ npm run lint

> eslint-plugin-example@1.0.0 lint
> eslint .


~/repos/eslint-plugin-no-floating-promise/examples/eslint-plugin-example/index.js
  3:1  error  Floating promises can lead to unexpected scheduling  no-floating-promise/no-floating-promise
  6:5  error  Floating promises can lead to unexpected scheduling  no-floating-promise/no-floating-promise

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.
```

### Fix

Fix shouw prepend an `await`, but note that's won't fix the whole problem, e.g. if the function isn't async.