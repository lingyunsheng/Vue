var http = require('http');
var fs = require('fs');
// 前端路由，  spa 用户体验  快，没有白屏 vue router  component 
// 后端路由  http server  /api  数据 ajax   
http.createServer(function(req, res) {
  var filepath = '.' + req.url;
  if (filepath === './') {
    filepath = './index.html';
  }
  readFile(filepath, res);
}).listen(8080);

function readFile(path, res) {
  fs.readFile(path, 'utf-8', function(err, data) {
    if (err) {
      readFile('./index.html', res);
      // throw new Error('出错了');
    } else {
      res.write(data);
      res.end();
    }
  });
}