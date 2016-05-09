'use strict';

const states = require('./states.json');

var getStateByCode = (code) => {
  let state = false;

  for (var i = 0; i < states.length; i++) {
    var self = states[i];

    if (self.code === code.toUpperCase()) {
      state = self;
      break;
    }
  }

  if (!state) {
    return 'UF not found';
  }

  return state;
}

exports.get = (uf) => {
  if (uf !== undefined) {
    var uf = uf.trim();

    if (uf === '') {
      throw new Error('UF can not be empty');
    }

    if (uf !== '') {
      return getStateByCode(uf);
    }
  }

  if (uf === undefined) {
    return states;
  }
};