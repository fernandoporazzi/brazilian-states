# brazilian-states

Get informations about Brazilian States.

## Install

    $ npm install --save brazilian-states

## Usage

```javascript

'use strict';

var brazilianStates = require('brazilian-states');

/*
return full list
[
  {
    "name": "Acre",
    "code": "AC",
    "capital": "Rio Branco",
    "region": "Norte",
    "cities": 22
  },
  ...
  ...
]
*/
console.log(brazilianStates.get());


/*
return data according to parameter. Expects state code.
{
  name: 'São Paulo',
  code: 'SP',
  capital: 'São Paulo',
  region: 'Sudeste',
  cities: 645
}
*/
console.log(brazilianStates.get('SP'));

```

## License

[MIT](LICENSE)
