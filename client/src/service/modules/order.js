import request from '@/utils/request'

class Order {
  getOrderList (data) {
    return request({
      method: 'GET',
      url: '/order/orderList',
      params: data
    })
  }

  addOrder (data) {
    return request({
      method: 'POST',
      url: '/order/addOrder',
      params: data
    })
  }

  editOrder (data) {
    return request({
      method: 'PUT',
      url: '/order/editOrder',
      params: data
    })
  }

  deleteOrder (data) {
    return request({
      method: 'DELETE',
      url: '/order/deleteOrder',
      params: data
    })
  }
}

export default new Order()
