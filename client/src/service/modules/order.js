import request from '@/utils/request'

class Order {
  getOrderList (data) {
    return request({
      method: 'POST',
      url: '/order/orderList',
      data: data
    })
  }

  addOrder (data) {
    return request({
      method: 'POST',
      url: '/order/addOrder',
      data: data
    })
  }

  editOrder (data) {
    return request({
      method: 'PUT',
      url: '/order/editOrder',
      data: data
    })
  }

  deleteOrder (data) {
    return request({
      method: 'DELETE',
      url: '/order/deleteOrder',
      data: data
    })
  }
}

export default new Order()
