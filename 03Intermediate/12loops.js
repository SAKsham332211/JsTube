// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
//
//  ...............................................for loop with array

var myStates = [
  "UttarPradesh",
  "UttaraKhand",
  1947,
  "HimachalPradesh",
  "Delhi",
  "Assam",
];

// for (let i = 0; i < myStates.length; i++) {
//   console.log(i);
// }

// for (let i = 0; i < myStates.length; i++) {
//   console.log(myStates[i]);
// }

// for (let i = 0; i < myStates.length; i++) {
//   if (typeof myStates[i] !== "string") continue;
//   console.log(myStates[i]);
// }

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] == "string") continue;
  console.log(myStates[i]);
}
