var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it can add 2 numbers', function(){
    calculator.previousTotal = "1"
    calculator.add("4")
    assert.equal(5.0, calculator.runningTotal)
  }),

  //can subtract 4 from 7 and get 3
  it('it can subtract 2 numbers', function(){
    calculator.previousTotal = "7"
    calculator.subtract("4")
    assert.equal(3.0, calculator.runningTotal)
  }),

  // `calculator.multiply()` - multiply 3 by 5 and get 15

  it('it can multiply 2 numbers', function() {
    calculator.previousTotal = "3"
    calculator.multiply("5")
    assert.equal(15.0, calculator.runningTotal)
  }),


  // `calculator.divide()` - divide 21 by 7 and get 3
  it('it should be able to divide 2 numbers', function() {
    calculator.previousTotal = "21"
    calculator.divide("7")
    assert.equal(3.0, calculator.runningTotal)
  })




 // - `calculator.numberClick()` - concatenate multiple number button clicks
 // - `calculator.operatorClick()` - chain multiple operations together
 // - `calculator.clearClick()` - clear the running total without affecting the calculation

});
