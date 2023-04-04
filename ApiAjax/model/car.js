let Car = function() {};

Car.prototype.carListData = function() {
  return [
    {
      name: '电脑',
      number: 100
    },
    {
      name: '手机',
      number: 200
    }
  ]
}

module.exports = Car