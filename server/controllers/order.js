var { Schema } = require('mongoose');
var { Order } = require('../models');
var message = require('../message');

module.exports = {
  orderList (req, res) {
    const reqData = { ...req.body }
    const page = reqData.page || 1
    const pageSize = reqData.pageSize || 10
    const skipNum = (page - 1) * pageSize

    delete reqData.page
    delete reqData.pageSize

    let queryData = {}

    for (let i in reqData) {
      if (reqData[i]) {
        queryData[i] = reqData[i]
      }
    }

    let query = Order.find({})

    let count = 0

    Order.find(queryData, function(err, orderList) {
      if (err) {
        res.send(400, message.failed(err));
      } else {
        count = orderList.length
      }
    })

    query.and(queryData)
    query.skip(skipNum)
    query.limit(pageSize)
    query.sort('-utc_created')
    query.exec((err, data) => {
      if (err) {
        res.send(400, message.failed(err));
      } else {
        res.json(message.succeeded({
          list: [...data],
          count
        }))
      }
    })
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
