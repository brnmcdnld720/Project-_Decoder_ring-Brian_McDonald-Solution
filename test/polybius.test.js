// Write your tests here!
const polybiusFunction = require("../src/polybius");
const expect = require("chai").expect

describe("polybiusFunction", () => {
  it("polybius function is a function", () => {
    expect(polybiusFunction.polybius).to.be.a('function');
  })
  it("polybius input '24' returns 'r'", () => {
    const expected = 'r';
    const actual = polybiusFunction.polybius("24", false)
    expect(expected).to.equal(actual);
  })
  it("polybius input '3251131343' returns 'hello'", () => {
    const expected = 'hello';
    const actual = polybiusFunction.polybius("3251131343", false)
    expect(expected).to.equal(actual);
  })
  it("polybius input '42' returns '(i/j)'", () => {
    const expected = '(i/j)';
    const actual = polybiusFunction.polybius("42", false)
    expect(expected).to.equal(actual);
  })
  it("polybius input '3251131343 2543241341 ' returns hello world'", () => {
    const expected = 'hello world';
    const actual = polybiusFunction.polybius("3251131343 2543241341", false)
    expect(expected).to.equal(actual);
  })
  it("polybius input 'h' returns '32'", () => {
    const expected = '32';
    const actual = polybiusFunction.polybius("h")
    expect(expected).to.equal(actual);
  })
  it("polybius input 'Hello' returns '3251131343'", () => {
    const expected = '3251131343';
    const actual = polybiusFunction.polybius("Hello")
    expect(expected).to.equal(actual);
  })
  it("polybius input 'Hello World' returns '3251131343 2543241341'", () => {
    const expected = '3251131343 2543241341';
    const actual = polybiusFunction.polybius("Hello World")
    expect(expected).to.equal(actual);
  })
  it("polybius input 'HI J' returns '3242 42'", () => {
    const expected = '3242 42';
    const actual = polybiusFunction.polybius("HI j")
    expect(expected).to.equal(actual);
  })
})