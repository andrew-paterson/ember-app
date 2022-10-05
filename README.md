# Overview

Uses a JSON API array of countries as a test stub. This would not be required by the app itself, only as test data.

# Scenario 1 - data stubs not included in build

`ember-addon` SHA  is `745c8a53f301ed071052e4216552e9f4108fbdd0` in `package.json`.

Data stubs stored in `addon-test-directory` of `ember-addon` and also imported from within `addon-test-directory` of `ember-addon`.

`npm-packe` is not listed as a dependency of `ember-addon`.

Countries data is not included in any build files- eg string `zimbabwe` is not found.

## Build summary

```
 - dist/assets/chunk.143.dcb12cda50a311f4669f.js: 591 B (315 B gzipped)
 - dist/assets/chunk.178.2d404e5ff0ad3a10238f.js: 591 B (314 B gzipped)
 - dist/assets/ember-app-51f39a964621481929ccf305a51b1a3e.js: 17.5 KB (2.29 KB gzipped)
 - dist/assets/ember-app-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
 - dist/assets/vendor-1c7bc51dbfa64050ea386b737708ee66.js: 862.26 KB (242.29 KB gzipped)
 - dist/assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
```

# Scenario 2 - data stubs included in build

`ember-addon` SHA is `8d10075d06210d36228e27444bbb7c523888a5ea` in `package.json`.

Data stubs in `npm-package` of which is listed as a dependency of `ember-addon`

Countries data is included in `dist/assets/chunk.564.b2365500944c422cbc62.js` eg string `zimbabwe` is found. Note this file is not produced in the scenario 1.


## Build summary

```
 - dist/assets/chunk.143.400884d8622b9cf82ac3.js: 593 B (316 B gzipped)
 - dist/assets/chunk.178.d2bce2e1a0adb07344cb.js: 1.73 KB (905 B gzipped)
 - dist/assets/chunk.564.b2365500944c422cbc62.js: 80.29 KB (9.09 KB gzipped)
 - dist/assets/ember-app-51f39a964621481929ccf305a51b1a3e.js: 17.5 KB (2.29 KB gzipped)
 - dist/assets/ember-app-d41d8cd98f00b204e9800998ecf8427e.css: 0 B
 - dist/assets/vendor-1c7bc51dbfa64050ea386b737708ee66.js: 862.26 KB (242.29 KB gzipped)
 - dist/assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css: 0 B

```