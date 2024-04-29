/*
Rewrite the code so the global array bookList is not changed inside either function. The add 
function should add the given bookName to the end of the array passed to it and return a new 
array (list). The remove function should remove the given bookName from the array passed to it. 
*/
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(newBookList, bookName) {
  newBookList = [...bookList]
  newBookList.push(bookName);

  return newBookList;
  // Change code above this line
}

// Change code below this line
function remove(newBookList,bookName) {
  if (newBookList.indexOf(bookName)) {
    newBookList.splice(newBookList.indexOf(bookName), 1)
    return newBookList
    // Change code above this line
  }
}