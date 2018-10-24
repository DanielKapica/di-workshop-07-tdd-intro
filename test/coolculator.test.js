var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function () {
  mm = new Coolculator()

  // Addition test
  it('should add', function () {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  // Multiplication test
  it('should multiply', function () {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  // Subtraction test
  it('should subtract', function () {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })
  
  // Division test
  it('should divide', function(){
    result = mm.divide(6, 2)
    expect(result).to.equal(3)
  })
  
  // Returning Highest Number test
  it('should return highest number', function(){
    result = mm.returnHighest(6, 3)
    expect(result).to.equal(6)
  })

  // Returning Lowest Number test
  it('should return lowest number', function(){
    result = mm.returnLowest(6, 3)
    expect(result).to.equal(3)
  })

  // Returning Double the Number test
  it('should double the number', function(){
    result = mm.double(4)
    expect(result).to.equal(8)
  })

  // Returning Square of the number test
  it('should sqare the number', function(){
    result = mm.square(4)
    expect(result).to.equal(16)
  })
})