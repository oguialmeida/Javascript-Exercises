// Error Handling

function worksOrNot(setValue, errorChance) {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorChance) {
      reject("Ocorreu um erro");
    } else {
      resolve(setValue);
    }
  });
}

worksOrNot("Testando...", 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .catch((err) => console.log(`Erro: ${err}`));

// Remembering that the error could also be handled with try catch
