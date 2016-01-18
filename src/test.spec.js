var test = require('tape');
var arrayToTrueMap = require('./');

test('should convert array of strings to true map', function (t) {
  t.deepEqual(arrayToTrueMap(['test1', 'test2', 'test3']), {
    test1: true,
    test2: true,
    test3: true
  });

  t.end();
});

test('should convert array of numbers to true map', function (t) {
  t.deepEqual(arrayToTrueMap([3, 5, 7]), {
    3: true,
    5: true,
    7: true
  });

  t.end();
});

test('should throw requires array error', function (t) {
  t.throws(arrayToTrueMap.bind(this, ''));
  t.end();
});

test('should return empty object when given an empty array', function (t) {
  t.deepEqual(arrayToTrueMap([]), {});
  t.end();
});
