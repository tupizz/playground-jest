const { aplicarDesconto } = require("./../../src/utils/aplicarDesconto");
const db = require("./../../src/utils/db");

describe("Aplicar desconto", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    // Simple Mock Function (ignore this, this is just a example for me in the future)
    db.getCustomerSync = function(id) {
      return { id: id, points: 11 };
    };

    // Jest way of creating mock
    db.getCustomerSync = jest.fn().mockReturnValue({ id: 123, points: 11 });

    const order = { customerId: 1, totalPrice: 850 };
    aplicarDesconto(order);

    expect(db.getCustomerSync).toHaveBeenCalled();
    expect(order.totalPrice).toBe(765);
  });
});
