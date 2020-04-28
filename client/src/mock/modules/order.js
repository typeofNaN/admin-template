const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://localhost:5003/api'
const code = 0

// 随机生成文章数据
const orderList = req => {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let reqData = JSON.parse(req.body)

  let dt = JSON.parse(req.body)

  if (dt._id) {
    arr = dt._id.split(',').filter(i => i.length === 1)
  }

  let list = []
  let pageSize

  if (reqData && reqData.pageSize) {
    pageSize = reqData.pageSize
  } else {
    pageSize = 10
  }

  let count = Random.integer(1000, 5000)

  for (let i = 0; i < pageSize; i++) {
    let order = {
      _id: arr[Math.floor(Math.random() * arr.length)],
      a: Random.cname(),
      b: Random.domain(),
      c: Random.email(),
      d: Random.first(),
      e: Random.integer(1, 999),
      f: Random.zip(),
      g: Random.ip(),
      is_deleted: Random.boolean,
      utc_created: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
    }

    list.push(order)
  }

  return {
    code,
    data: {
      list,
      count
    }
  }
}

export default (() => {
  Mock.mock(`${domain}/order/orderList`, 'post', orderList)
})()
