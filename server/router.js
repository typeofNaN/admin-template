const express = require('express')
const router = express.Router()
const orderController = require('./controllers/order')

router.use(function(req, res, next) {
  next();
});

router
  .route('/order/orderList')

  .get(orderController.orderList)

router
  .route('/order/addOrder')

  .post(orderController.addOrder)

// router
//   .route('/order/edit')

//   .put(orderController.editOrder)

// router
//   .route('/orders/delete')

//   .delete(orderController.deleteOrder);

module.exports = router;
