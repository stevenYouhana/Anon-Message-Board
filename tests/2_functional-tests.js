/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('API ROUTING FOR /api/threads/:board', function() {

    suite('POST', function() {
      test('generapost', function(done) {
        chai.request(server)
        .post('/api/board/test')
        .send({
          name: "Steve",
          topic: "tech",
          board: "JS",
          notes: "fornt-end"
        })
        .end(function(err, res) {
          if (err) {
            console.error(err);
          }
          else {
            console.log("else {", res.status);
            assert.equal(res.status, 200);
          }
          done();
        });
      })
    });

    suite('GET', function() {

    });

    suite('DELETE', function() {

    });

    suite('PUT', function() {

    });


  });

  suite('API ROUTING FOR /api/replies/:board', function() {

    suite('POST', function() {

    });

    suite('GET', function() {

    });

    suite('PUT', function() {

    });

    suite('DELETE', function() {

    });

  });

});
