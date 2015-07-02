/// <reference path="typings/node/node.d.ts"/>
require('node-jsx').install();

var express = require('express');
var app = express();
var React = require('react/addons');
var component = require('./component.js');
  
var MapSelect = React.createFactory(component.MapSelect);
var Map = React.createFactory(component.Map);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.render('index', {
    react: React.renderToString(HelloMessage({name: "John"}))
  })
})

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})