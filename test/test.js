'use strict';

var app = require("../app.js");

var expect = require("chai").expect;
var assert = require("chai").assert;

var request = require("supertest");

describe("Prueba de acceso", function() {
	it("Inicio", function(done) {
		request(app)
			.get("/")
			.expect("Content-Type", /text\/plain/)
			.expect(302, done);
	});

  it("Inicio (2)", function(done) {
    request(app)
      .get("/todo")
      .expect("Content-Type", /text\/html/)
      .expect(200, done);
  });

  it("Crear", function(done) {
    request(app)
      .post("/todo/add")
      .send({
        "newtodo": 'prueba'
      })
      .expect("Content-Type", /text\/plain/)
      .expect(302, done);
  });

  it("Borrar", function(done) {
    request(app)
      .post("/todo/delete/1")
      .expect("Content-Type", /text\/plain/)
      .expect(302, done);
  });

});
