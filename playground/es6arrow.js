// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(55, 1));

// const user = {
//   name: "Andrew",
//   cities: ["Kansas City", "Milton Keynes", "Overland Park"],
//   printPlacesLived: function() {
//     this.cities.forEach(function() {
//       console.log(this.cities);
//     });
//   }
// };

// user.printPlacesLived();

const multiplier = {
  numbers: [4, 6, 87, 2, 31, 9],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
