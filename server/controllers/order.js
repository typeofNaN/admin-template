var { Schema } = require('mongoose');
var { Order } = require('../models');
var message = require('../message');

module.exports = {
  orderList (req, res) {
    const reqData = { ...req.query }
    const page = reqData.page || 1
    const pageSize = reqData.pageSize || 10
    const skipNum = (page - 1) * pageSize
    delete reqData.page
    delete reqData.limit

    Order.find(reqData, function(err, orderList) {
      if (err) {
        res.send(400, message.failed(err));
      } else {
        res.json(message.succeeded(orderList));
      }
    })
    .skip(skipNum)
    .limit(pageSize)
  },

  addOrder (req, res) {
    if (!req.body) {
      return res.send(400, message.failed('please set request body'));
    }

    var order = new Order(req.body);
    order.save(function(err) {
      if (err) res.send(400, message.failed(err));
      else res.json(message.succeeded(order));
    });
  }
}
