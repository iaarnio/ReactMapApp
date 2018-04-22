var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

var server_port = 8080;
var server_ip_address = 'hungry-boyd-2f1227.netlify.com';

app.listen(server_port, server_ip_address, function() {
  console.log('Listening on ' + server_ip_address + ', server_port ' + server_port)
})
