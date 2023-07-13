const expect = require("chai").expect;
const newsRoute = require("../../src/routes/user.route");
const server = require("../../src/app");
const sinon = require("sinon");
const chai = require("chai");
const bcrypt = require("bcrypt");
let chaitHttp = require("chai-http");
chai.use(chaitHttp);
describe("user route", () => {
  it("should register the user", (done) => {
    const userBody = {
      name: "tom",
      email: "tom@gmail.com",
      password: "1234",
      username: "tom123",
    };
    userBody.password = bcrypt.hash(userBody.password, 10);
    chai
      .request(server)
      .post("/user/register")
      .send(userBody)
      .end((err, res) => {
        expect(res.status).equal(201);
      });
    done();
  });
  it("should sigin with fail the user", (done) => {
    const userBody = {
      username: "tom123",
      password: "1234",
    };
    chai
      .request(server)
      .post("/user/login")
      .send(userBody)
      .end((err, res) => {
        expect(res.status).equal(400);
        done();
      });
  });
});
