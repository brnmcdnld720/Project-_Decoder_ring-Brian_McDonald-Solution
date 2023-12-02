// Write your tests here!
const caesarFunction = require("../src/caesar");
const expect = require("chai").expect

describe("caesarFunction", () => {
  it("caesar function is a function", () => {
    expect(caesarFunction.caesar).to.be.a('function');
  })
  it("Argument does not contain message return false", () => {
    const expected = false;
    const actual = caesarFunction.caesar( undefined, 12);
    expect(expected).to.equal(actual);
  })
   it("Argument does not contain a number return false", () => {
    const expected = false;
    const actual = caesarFunction.caesar("hello", undefined);
    expect(expected).to.equal(actual);
  })
    it("Shift value is 26 return false", () => {
    const expected = false;
    const actual = caesarFunction.caesar("hello", 26);
    expect(expected).to.equal(actual);
  })
    it("Shift value is -26 return false", () => {
    const expected = false;
    const actual = caesarFunction.caesar("hello", -26);
    expect(expected).to.equal(actual);
  })
  it("A converts to b", () => {
    const expected = 'b';
    const actual = caesarFunction.caesar("A", 1);
    expect(expected).to.equal(actual);
  })
  it("B converts to a", () => {
    const expected = 'a';
    const actual = caesarFunction.caesar("B", -1);
    expect(expected).to.equal(actual);
  })  
  it("Decode: A converts to b", () => {
    const expected = 'b';
    const actual = caesarFunction.caesar("A", -1, false);
    expect(expected).to.equal(actual);
  })  
  it("Decode: A converts to z", () => {
    const expected = 'z';
    const actual = caesarFunction.caesar("A", 1, false);
    expect(expected).to.equal(actual);
  })  

})


