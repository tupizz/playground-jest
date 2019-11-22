const groupByCollections = require("../../src/utils/groupByCollections");

describe("Testando agrupação por campo em coleções", () => {
  it("Dado um conjunto de dados devemos agrupar por determinada propiedade que for passada para função", () => {
    let data = [
      { name: "Raphel", gender: "male" },
      { name: "Tom", gender: "male" },
      { name: "Jerry", gender: "male" },
      { name: "Dorry", gender: "female" },
      { name: "Suzie", gender: "female" },
      { name: "Dianna", gender: "female" },
      { name: "Prem", gender: "male" }
    ];

    const groupedValues = groupByCollections(data, "gender");

    expect(groupedValues).toEqual({
      female: [
        { gender: "female", name: "Dorry" },
        { gender: "female", name: "Suzie" },
        { gender: "female", name: "Dianna" }
      ],
      male: [
        { gender: "male", name: "Raphel" },
        { gender: "male", name: "Tom" },
        { gender: "male", name: "Jerry" },
        { gender: "male", name: "Prem" }
      ]
    });
  });
});
