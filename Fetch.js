require('babel-polyfill')
require('es6-promise').polyfill()

import 'whatwg-fetch'

const domain = 'http://localhost:8090/'

export function Fetch(url, options) {
  options.body = JSON.stringify(options.body)

  const defer = new Promise((resolve, reject) => {
    fetch(`${domain}${url}`, options)
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.code === 200) {
          resolve(data)
        } else {
          console.log('请求失败')
          reject(data)
        }
      })
      .catch(error => {
        console.log('操作异常')
        reject()
      })
  })

  return defer
}
