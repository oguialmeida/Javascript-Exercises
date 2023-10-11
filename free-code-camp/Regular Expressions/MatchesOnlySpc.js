// Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/ig;
let result = haRegex.test(haStr);
