/* Repeat a given string str (first argument) for num times (second argument). Return an empty
string if num is not a positive number. For the purpose of this challenge, do not use the 
built-in .repeat() method. */
function repeatStringNumTimes(str, num) {
  let i = 0;
  let aux = "";
  if (num <= 0) {
    return "";
  } else {
    do {
      i++;
      aux += str;
    } while (i < num);
    str = aux;
    return str;
  }
}

repeatStringNumTimes("abc", 3);
