/* eslint-disable no-tabs */
/* eslint-disable no-undef */
import jsonp from '../common/js/jsonp'
// eslint-disable-next-line standard/object-curly-even-spacing
import { commonParams, options } from '../api/config'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getSearch() {
  const url = 'api/getSearch'
  const data = Object.assign({}, commonParams, {
    w: query,
    p: page,
    perpage: perpage,
    // eslint-disable-next-line no-undef
    n: perpage,
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-trailing-spaces
    catZhida: zhida ? 1 : 0,
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mqq.all',
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
