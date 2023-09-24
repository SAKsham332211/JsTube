// D = (L -S)/L * 100;

// a + (b * c)/(d * e);

var Principal = 600;
var Rate = 6;
var time = 2;

var SimpleInterest = (Principal * Rate * time) / 100;

console.log(SimpleInterest);

DisplaySimpleInterest = Math.round(SimpleInterest);

console.log(DisplaySimpleInterest);

// selling price

var sellingPrice = 499;
var listingPrice = 699;

var DiscountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(DiscountPrice);

var displayDiscountPrice = Math.round(DiscountPrice);

console.log(displayDiscountPrice + "%");

var result = listingPrice > sellingPrice;

console.log(typeof result);
