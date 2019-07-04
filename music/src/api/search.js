import jsonp from '../common/js/jsonp'
// eslint-disable-next-line standard/object-curly-even-spacing
import { commonParams, options} from '../api/config'
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
