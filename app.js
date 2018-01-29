var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================
var clientRouter = express.Router();              // get an instance of the express Router

clientRouter.get('/user', function(req, res) {
  res.send('GET FIRED');
});

clientRouter.post('/user', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/client', clientRouter);

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8090,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
