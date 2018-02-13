const assert = require('assert')
const vows = require('vows')
const calc = require('../calc')

let a = 3
let b = 5

vows.describe('calc').addBatch({
  'plus': {
    topic: calc(a, b, '+'),
    'result should be valid': function (result) {
      assert.deepEqual(result, {
          input : {
              a : 3,
              b : 5,
          },
          operator : '+',
          result : 8,
      });
    }
  },
  'minus': {
    topic: calc(a, b, '-'),
    'result should be valid': function (result) {
      assert.deepEqual(result, {
          input : {
              a : 3,
              b : 5,
          },
          operator : '-',
          result : -2,
      });
    }
  },
  'multiply': {
    topic: calc(a, b, '*'),
    'result should be valid': function (result) {
      assert.deepEqual(result, {
          input : {
              a : 3,
              b : 5,
          },
          operator : '*',
          result : 15,
      });
    }
  },
  'divide': {
    topic: calc(a, b, '/'),
    'result should be valid': function (result) {
      assert.deepEqual(result, {
          input : {
              a : 3,
              b : 5,
          },
          operator : '/',
          result : 0.6,
      });
    }
  },
  'power': {
    topic: calc(a, b, '^'),
    'result should be valid': function (result) {
      assert.deepEqual(result, {
          input : {
              a : 3,
              b : 5,
          },
          operator : '^',
          result : 243,
      });
    }
  },
  'operator not math': {
    topic: calc(a, b, 'pow'),
    'result should be valid': function (result) {
      assert.deepEqual(result, {
          input : {
              a : 3,
              b : 5,
          },
          operator : 'pow',
          result : 'Operator not math.',
          isError : true,
      });
    }
  },
}).export(module);
