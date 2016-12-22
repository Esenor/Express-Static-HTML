var request = require('supertest')
var fs = require('fs')
describe('has route', function () {
  it('should return 200 code response', function (done) {
    request('http://localhost:80')
      .post('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done()
      })
  })
})