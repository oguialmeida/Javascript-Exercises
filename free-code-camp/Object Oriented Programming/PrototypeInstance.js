// Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Altere apenas o código abaixo desta linha
let beagle = new Dog();
Dog.prototype = Object.create(Animal.prototype)