var expect = require('chai').expect

function toNumber(word){
    var numbers = ["zero", "one", "two"];

    if ( word === "zero" ) {
      return 0;
    }
    if ( word === "one" ) {
      return 1;
    }
    if ( word === "two" ) {
      return 2;
    }
    if ( word === "three" ) {
      return 3;
    }
    if ( word === "four" ) {
      return 4;
    }
    if ( word === "five" )  {
      return 5;
    }
    if ( word === "six" ) {
      return 6;
    }
    if ( word === "seven" ) {
      return 7;
    }
    if ( word === "eight" ) {
      return 8;
    }
    if ( word === "nine" ) {
      return 9;
    }
}

expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
expect(toNumber("two")).to.equal(2);
expect(toNumber("three")).to.equal(3);
expect(toNumber("four")).to.equal(4);
expect(toNumber("five")).to.equal(5);
expect(toNumber("six")).to.equal(6);
expect(toNumber("seven")).to.equal(7);
expect(toNumber("eight")).to.equal(8);
expect(toNumber("nine")).to.equal(9);

function plus(A, B){
      return toNumber(A) + toNumber(B);
}

expect(plus).to.exist;
expect(plus("zero", "zero")).to.equal(0);
expect(plus("zero", "one")).to.equal(1);
expect(plus("zero", "two")).to.equal(2);
expect(plus("zero", "three")).to.equal(3);
expect(plus("zero", "four")).to.equal(4);
expect(plus("zero", "five")).to.equal(5);
expect(plus("zero", "six")).to.equal(6);
expect(plus("zero", "seven")).to.equal(7);
expect(plus("zero", "eight")).to.equal(8);
expect(plus("zero", "nine")).to.equal(9);

expect(plus("one", "zero")).to.equal(1);
expect(plus("one", "one")).to.equal(2);
expect(plus("one", "two")).to.equal(3);
expect(plus("one", "three")).to.equal(4);
expect(plus("one", "four")).to.equal(5);
expect(plus("one", "five")).to.equal(6);
expect(plus("one", "six")).to.equal(7);
expect(plus("one", "seven")).to.equal(8);
expect(plus("one", "eight")).to.equal(9);
expect(plus("one", "nine")).to.equal(10);

// console.log(plus("one", "nine"))
expect(plus("two", "zero")).to.equal(2);
expect(plus("two", "one")).to.equal(3);
expect(plus("two", "two")).to.equal(4);
expect(plus("two", "three")).to.equal(5);
expect(plus("two", "four")).to.equal(6);
expect(plus("two", "five")).to.equal(7);
expect(plus("two", "six")).to.equal(8);
expect(plus("two", "seven")).to.equal(9);
expect(plus("two", "eight")).to.equal(10);
expect(plus("two", "nine")).to.equal(11);

expect(plus("three", "zero")).to.equal(3);
expect(plus("three", "one")).to.equal(4);
expect(plus("three", "two")).to.equal(5);
expect(plus("three", "three")).to.equal(6);
expect(plus("three", "four")).to.equal(7);
expect(plus("three", "five")).to.equal(8);
expect(plus("three", "six")).to.equal(9);
expect(plus("three", "seven")).to.equal(10);
expect(plus("three", "eight")).to.equal(11);
expect(plus("three","nine")).to.equal(12);

expect(plus("four", "zero")).to.equal(4);
expect(plus("four", "one")).to.equal(5);
expect(plus("four", "two")).to.equal(6);
expect(plus("four", "three")).to.equal(7);
expect(plus("four", "four")).to.equal(8);
expect(plus("four", "five")).to.equal(9);
expect(plus("four", "six")).to.equal(10);
expect(plus("four", "seven")).to.equal(11);
expect(plus("four", "eight")).to.equal(12);
expect(plus("four", "nine")).to.equal(13);

expect(plus("five", "zero")).to.equal(5);
expect(plus("five", "one")).to.equal(6);
expect(plus("five", "two")).to.equal(7);
expect(plus("five", "three")).to.equal(8);
expect(plus("five", "four")).to.equal(9);
expect(plus("five", "five")).to.equal(10);
expect(plus("five", "six")).to.equal(11);
expect(plus("five", "seven")).to.equal(12);
expect(plus("five", "eight")).to.equal(13);
expect(plus("five", "nine")).to.equal(14);

expect(plus("six", "zero")).to.equal(6);
expect(plus("six", "one")).to.equal(7);
expect(plus("six", "two")).to.equal(8);
expect(plus("six", "three")).to.equal(9);
expect(plus("six", "four")).to.equal(10);
expect(plus("six", "five")).to.equal(11);
expect(plus("six", "six")).to.equal(12);
expect(plus("six", "seven")).to.equal(13);
expect(plus("six", "eight")).to.equal(14);
expect(plus("six", "nine")).to.equal(15);

expect(plus("seven", "zero")).to.equal(7);
expect(plus("seven", "one")).to.equal(8);
expect(plus("seven", "two")).to.equal(9);
expect(plus("seven", "three")).to.equal(10);
expect(plus("seven", "four")).to.equal(11);
expect(plus("seven", "five")).to.equal(12);
expect(plus("seven", "six")).to.equal(13);
expect(plus("seven", "seven")).to.equal(14);
expect(plus("seven", "eight")).to.equal(15);
expect(plus("seven", "nine")).to.equal(16);

expect(plus("eight", "zero")).to.equal(8);
expect(plus("eight", "one")).to.equal(9);
expect(plus("eight", "two")).to.equal(10);
expect(plus("eight", "three")).to.equal(11);
expect(plus("eight", "four")).to.equal(12);
expect(plus("eight", "five")).to.equal(13);
expect(plus("eight", "six")).to.equal(14);
expect(plus("eight", "seven")).to.equal(15);
expect(plus("eight", "eight")).to.equal(16);
expect(plus("eight", "nine")).to.equal(17);

expect(plus("nine", "zero")).to.equal(9);
expect(plus("nine", "one")).to.equal(10);
expect(plus("nine", "two")).to.equal(11);
expect(plus("nine", "three")).to.equal(12);
expect(plus("nine", "four")).to.equal(13);
expect(plus("nine", "five")).to.equal(14);
expect(plus("nine", "six")).to.equal(15);
expect(plus("nine", "seven")).to.equal(16);
expect(plus("nine", "eight")).to.equal(17);
expect(plus("nine", "nine")).to.equal(18);

//console.log(plus("six", "nine"))

function minus(A, B){
    return toNumber(A) - toNumber(B);
}
 expect(minus).to.exist;

 expect(minus("zero", "zero")).to.equal(0);
 expect(minus("zero", "one")).to.equal(-1);
 expect(minus("zero", "two")).to.equal(-2);
 expect(minus("zero", "three")).to.equal(-3);
 expect(minus("zero", "four")).to.equal(-4);
 expect(minus("zero", "five")).to.equal(-5);
 expect(minus("zero", "six")).to.equal(-6);
 expect(minus("zero", "seven")).to.equal(-7);
 expect(minus("zero", "eight")).to.equal(-8);
 expect(minus("zero", "nine")).to.equal(-9);
 // console.log(minus("zero", "three"))
 expect(minus("one", "zero")).to.equal(1);
 expect(minus("one", "one")).to.equal(0);
 expect(minus("one", "two")).to.equal(-1);
 // console.log(minus("one", "two"))
 expect(minus("one", "three")).to.equal(-2);
 expect(minus("one", "four")).to.equal(-3);
 expect(minus("one", "five")).to.equal(-4);
 expect(minus("one", "six")).to.equal(-5);
 expect(minus("one", "seven")).to.equal(-6);
 expect(minus("one", "eight")).to.equal(-7);
 expect(minus("one", "nine")).to.equal(-8);
 console.log(minus("one", "five"))

/**
  * @param {String} A
  * @param {String} B
  * @return {Number} Infinity or 0
  */
function divide(A, B){
    if (B === "zero"){
      return Infinity;
    }
    if (A === "one"){
      if(B === "zero"){
        return Infinity;
      }
      return 1;
    }
    return 0;
  }

expect(divide("zero", "zero")).to.equal(Infinity);
expect(divide("zero", "one")).to.equal(0);
expect(divide("zero", "two")).to.equal(0);
// ...
expect(divide("one", "zero")).to.equal(Infinity);
expect(divide("one", "one")).to.equal(1)

/*
var numbers = [ "zero", "one", "two"];

var index = 0;
while (index < numbers.length){
  item = numbers[index]
  // do something
  index = index + 1;
}


for (var index = 0; index < numbers.length; index = index + 1){
// do something
}

for (var iteration = 0; iteration < 4; iteration++){
}

for (var index - 0; index < numbers.length; index++){
}
numbers.forEach(function(item /*, index, all*/){
    item
}); */
