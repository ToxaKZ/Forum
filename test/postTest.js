/*global describe, it, before, beforeEach, after, afterEach */
describe('/Post', function () {

  var server = require('../server/server');
  var loopback = require('loopback');
  var supertest = require('supertest');
  var request = require('supertest')(server);
  var assert = require('assert');

  it('Post a new post with all fields', function (done) {
    request.post('/api/Posts')
      .send(
        {
          id: '570516c421405799130fd237',
          header: 'some header',
          body: 'test body'
        })
      .expect(200, done);
  });

  it('Get all posts', function (done) {
    request.get('/api/posts/getPostsList')
      .expect(200, done);
  });

  it('Post a new post without header field', function (done) {
    request.post('/api/Posts').send({ body: 'Some body' }).expect(422, done);
  });

  it('Delete post', function (done) {
    request.delete('/api/posts/570516c421405799130fd237').expect(200, done);
  });

  it('Request body for post', function (done) {
    request.get('/api/posts/570516c421405799130fd237/getBody')
      .expect(200, done);
  });
});