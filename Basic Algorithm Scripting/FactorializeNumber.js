// Factorialize a number
function factorialize(num) {
  let fat = 1;
  while (num >= 1) {
    --num;
    fat = fat * (num + 1);
  }
  num = fat;
  return num;
}

factorialize(5);

