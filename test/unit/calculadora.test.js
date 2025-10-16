const calculadora = require("../../models/calculadora.js");

test("somar 2+2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5+100 deveria retornar 4", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("string 'banana' + 100 deve retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("dividindo por 0", () => {
  const resultado = calculadora.divisao(10, 0);
  expect(resultado).toBe("Você não pode dividir por 0");
});
