// Write your tests here!
const substitutionFunction = require("../src/substitution");
const expect = require("chai").expect

describe("substitution Function", () => {
  it("substitution function is a function", () => {
    expect(substitutionFunction.substitution).to.be.a('function');
  });
  it("substitution function 'message' encodes to 'y&ii$r&' with alphabet '$wae&zrdxtfcygvuhbijnokmpl'", () => {
    const expected = 'y&ii$r&';
    const actual = substitutionFunction.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(expected).to.equal(actual);
  });  
});