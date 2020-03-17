# Soda

The Style Guide of the future.

### Installing

##### Webpack
Using webpack, in your main file.

```js
import './lib/soda/styles.scss';
```

##### Webpack Aliases

```js
{
  controls: resolve(__dirname, '../lib/soda/controls'),
  lib: resolve(__dirname, '../lib')
}
```

##### Mixins
For components or scss files that need mixins:

```scss
@import './lib/soda/mixins.scss';
```
