let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    0: "Teste",
    1: "USA",
    0.9: "Brasil",
  };

  for (let code in codes) {
    console.log(`${code}:${codes[code]}`);
  }

  // Se o elemento for número (seja string ou number), vai ser colocado na ordem correta

  // Primeiro números inteiros, depois quebrados