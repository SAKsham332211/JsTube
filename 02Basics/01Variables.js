var sellingPrice = 499;
var listingPrice = 699;

var DiscountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(DiscountPrice);

var displayDiscountPrice = Math.round(DiscountPrice);

console.log(displayDiscountPrice);
var paymentmode = "credit card";
console.log(paymentmode);
