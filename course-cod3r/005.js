// Invert the numbers using destructuring

function generateBetween(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const range = max - min + 1;
    const result = parseInt(Math.random() * range) + min;
    resolve(result);
  });
}

generateBetween(10, 30).then(console.log);
