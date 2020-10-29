const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1, 1001));


const user = {
  name: 'Jason',
  cities: ['Santa Cruz, CA', 'Spokane, WA', 'Waltham, MA'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [12, 42, 0.5],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  },
};

console.log(multiplier.multiply())
