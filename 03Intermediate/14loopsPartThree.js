//var names = ["Whatsapp", "Facebook", "Instagram", "linkedin", "Twitter"];
//names.forEach((n) => console.log(n));

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (let n of names) {
//   console.log(n);
// }
//.............................................................objects begin

var symbols = {
  yt: "youtube",
  ig: "instagram",
  fb: "Facebook",
  id: "sharma.saksham137@gmail.com",
};

for (let s in symbols) {
  console.log(`key is: ${s} and value is: ${symbols[s]}`);
}
