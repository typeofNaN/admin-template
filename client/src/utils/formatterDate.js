/**
 * @desc 时间格式化函数 - formatterDate.js
 * @param {DataTime} date: 时间
 * @param {String} timeStr: 时间格式(yyyy-MM-dd HH:mm:ss)
 */

module.exports = (date, timeStr) => {
  let t = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }

  if (/(y+)/.test(timeStr)) {
    timeStr = timeStr.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (var k in t) {
    if (new RegExp('(' + k + ')').test(timeStr)) {
      timeStr = timeStr.replace(RegExp.$1, (RegExp.$1.length === 1)
        ? (t[k])
        : (('00' + t[k]).substr(('' + t[k]).length))
      )
    }
  }

  return timeStr
}
