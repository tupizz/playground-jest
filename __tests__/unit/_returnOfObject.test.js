const returnOfObject = require("../../src/utils/returnOfObject");

describe("Testando formas de testar retornos de objetos", () => {
  it("Dado retorno de um objeto posso dar match por propriedades", () => {
    const object = returnOfObject();

    // Não se preoucupa com a ordem dos elementos
    expect(object).toMatchObject({
      sex: "male",
      age: 25,
      name: "Tadeu",
      isGenious: true
    });
  });
});
