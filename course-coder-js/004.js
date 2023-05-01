// Executing content from a file inside a promise

const fs = require("fs");
const path = require("path");

const addPath = path.join(__dirname, "data.txt");

function displayContent(_, conteudo) {
  console.log(conteudo.toString());
}

function waitPromise(setTime = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      fs.readFile(addPath, displayContent);
      resolve();
    }, setTime);
  });
}

waitPromise()
  .then(() => waitPromise())
  .then(waitPromise);
