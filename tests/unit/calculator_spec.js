var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    calculator.numberClick(5);
    assert.equal(5, calculator.runningTotal)
  });

  it('it has a a multiply function', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*')
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(25, calculator.runningTotal)
  });

  it('it has an add function', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+')
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.equal(5, calculator.runningTotal)
  });

  it('it has an subtract function', function(){
    calculator.numberClick(5);
    calculator.operatorClick('-')
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.equal(1, calculator.runningTotal)
  });

  it('it has a divide function', function(){
    calculator.numberClick(9);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  });

  it('it has a divide function', function(){
    calculator.numberClick(9);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.clearClick();
    calculator.operatorClick('+');
    calculator.numberClick(1);

    assert.equal(1, calculator.runningTotal)
  });


  it('it has an unit add function', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  });

  it('it has a a unit multiply function', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  });

  it('it has a a unit multiply function', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  });

  it('it has a a unit multiply function', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  });





});
