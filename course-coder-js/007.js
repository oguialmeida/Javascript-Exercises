// Working with return of asynchronous functions

function waitPromise(setTime = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise...");
      resolve();
    }, setTime);
  });
}

function displayValue() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executePromise() {
  let setValue = await displayValue();

  await waitPromise(1500);
  console.log(`Aysnc/Await ${setValue}...\n`);

  await waitPromise(1500);
  console.log(`Aysnc/Await ${setValue + 1}...\n`);

  await waitPromise(1500);
  console.log(`Aysnc/Await ${setValue + 2}...\n`);

  return setValue + 3;
}

async function returningValue() {
  return 20;
}

async function capturingValue() {
  const setValue = await returningValue();
  console.log(`Valor capturado na função: ${setValue}`);
}

executePromise().then(console.log);
capturingValue();
