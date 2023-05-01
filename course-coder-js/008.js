// Working with constructor function

function Product(name, price, desc = 0.15) {
  this.name = name;
  this.price = price;
  this.desc = desc;

  this.finalPrice = function () {
    return this.price * (1 - this.desc);
  };
}

const p1 = new Product("Caneta", 10);
console.log(p1.name);

const p2 = new Product("Geladeira", 3000);
console.log(p2.price);
console.log(p2.finalPrice());
