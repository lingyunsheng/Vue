import originJSONP from 'jsonp'
// 传入的方法
export default function jsonp(url, data, option) {
  //  url 是否有问号
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  // 返回promise方法 成功resolve
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 定义一个function  data 对象 打平 到 url
function param(data) {
  let url = ''
  for (var k in data) {
    // bukeyi给后端传undefined
    let value = data[k] !== undefined ? data[k] : ''
    // url 拼接
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
