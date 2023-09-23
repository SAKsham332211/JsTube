// D = (L -S)/L * 100;

// a + (b * c)/(d * e);

var Principal = 600;
var Rate = 6;
var time = 2;

var SimpleInterest = (Principal * Rate * time) / 100;

console.log(SimpleInterest);

DisplaySimpleInterest = Math.round(SimpleInterest);

console.log(DisplaySimpleInterest);
