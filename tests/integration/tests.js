const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('it should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  }),
 // 2. Do the arithmetical operations update the display with the result of the operation?
 it('it should have working operator buttons', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number2')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('4')
 }),
 // 3. Can multiple operations be chained together?
 it('it should be able to chain operations together', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number1')).click();
   element(by.css('#operator_multiply')).click();
   element(by.css('#number1')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('2')
 }),
 // 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
 it('it should be able to output positive values', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number1')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number1')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('2')
}),

it('it should be able to output negative values', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-8')
});
it('it should be able to output decimal values', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
});
it('it should be able to output very large values', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('9.9999999998e+21')
});

 // 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
it('should return a string when dividing by 0', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click()
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal("Error")
});


});
