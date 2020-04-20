var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var OrderSchema = new Schema({
  order_id: {
    type: String,
    alias: 'orderId'
  },
  a: {
    type: String
  },
  b: {
    type: String
  },
  c: {
    type: String
  },
  d: {
    type: String
  },
  e: {
    type: String
  },
  f: {
    type: String
  },
  g: {
    type: String
  },

  text: String,
  utc_created: {
    type: Date,
    default: Date.now(),
    alias: 'utcCreated'
  },
  is_deleted: {
    type: Boolean,
    default: false,
    alias: 'isDeleted'
  }
});

module.exports = mongoose.model('Order', OrderSchema);
