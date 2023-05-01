// How to make promises

function waitPromise(setTime = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando promessa...");
      resolve();
    }, setTime);
  });
}

waitPromise()
  .then(() => waitPromise())
  .then(waitPromise);
