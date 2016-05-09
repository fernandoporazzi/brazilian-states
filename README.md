# brazilian-states

Get informations about Brazilian States.

## Install

    $ npm install --save brazilian-states

## Usage

```javascript

'use strict';

var brazilianStates = require('brazilian-states');

// return full list
console.log(brazilianStates.get());

// return data according to parameter. Expects state code.
console.log(brazilianStates.get('RS'));

```

## License

[MIT](LICENSE)
