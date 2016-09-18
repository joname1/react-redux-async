
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods',
		'GET,POST,PUT,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers',
		'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
	next();
})

const data = ['apple','apple2']
// get
app.get('/api/getComments', (req, res) => {
  res.json({
    code: 200,
    message: 'get请求成功',
    data: data
  });
})
// post
app.post('/api/addComments', function(req, res) {
  res.json({
    code: 200,
    message: 'post请求成功'
  });
});


app.listen(8090, () => {
	console.log('server started at 8090...')
})
