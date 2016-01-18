module.exports = function (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('array-to-true-map requires an array');
  }

  return arr.reduce(function (obj, key) {
    obj[key] = true;
    return obj;
  }, {});
};