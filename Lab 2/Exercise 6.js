// ES6 Classes
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}
class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
}
const mySedan = new Sedan("KIA", 2024, 20000);
console.log(mySedan);