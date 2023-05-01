// Working with classes, outside modifying, adding functionality and created inside the class

class Product {
  constructor(name, price, desc = 0.5) {
    this.name = name;
    this.price = price;
    this._desc = desc;
  }

  get name() {
    return `Product: ${this._name}`;
  }

  set name(newName) {
    this._name = newName.toUpperCase();
  }

  get finalPrice() {
    return this.price * (1 - this._desc);
  }
}

Product.prototype.log = function () {
  console.log(`name: ${this.name} Preço: ${this.price}`);
};

Object.defineProperty(Product.prototype, "desc", {
  get: function () {
    return this._desc;
  },
});

Object.defineProperty(Product.prototype, "descString", {
  get: function () {
    return `${this._desc * 100}%`;
  },
});

const p1 = new Product("Caneta", 10);
p1.log();

console.log(p1.name);

const p2 = new Product("Geladeira", 3000);
console.log(p2.price);
console.log(p2.finalPrice);
console.log(p2.desc);
console.log(p2.descString);
