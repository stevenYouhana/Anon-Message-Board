
'use strict';

var expect = require('chai').expect;
var url = require('url');

module.exports = function (app) {
console.log("ROUTES");
var compiledObject;
  app.route('/api/board/:b')
  .post(function(req, res) {
    console.log(".post(function");
    compiledObject = {
      board: req.body.board,
      user: req.body.name,
      topic: req.body.topic,
      thread: req.body.thread
    };
    res.json(compiledObject);
  })
  .get(function(req, res) {
    console.log(".get(function(req, res) {");

    compiledObject = {
      board: req.body.board,
      user: req.body.name,
      topic: req.body.topic,
      thread: req.body.thread
    };
    res.json(compiledObject)
  });

  app.route('/api/replies/:board');

};
