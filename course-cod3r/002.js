// Working with map, filter and reduce

const challenge = () => {
  const carrinho = [
    { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
    { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
    { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
    { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
    { nome: "Tesoura", qtde: 10, preco: 19.2, fragil: true },
  ];
  
  const search = (e) => e.fragil === true;
  const quant = (e) => e.qtde * e.preco;
  const sum = (a, b) => a + b;

  const searchValue = carrinho.filter(search);
  const searchQuant = searchValue.map(quant);
  const searchAvg = searchQuant.reduce(sum) / searchQuant.length;

  return console.log(searchAvg);
};

challenge()
