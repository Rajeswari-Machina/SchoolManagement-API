const haversine = require('haversine');

module.exports = function calculateDistance(start, end) {
  return haversine(start, end, { unit: 'km' });
};
