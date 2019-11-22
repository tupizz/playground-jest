const testingException = require("../../src/utils/testingException");
const {
  UsernameNotProvidedException,
  PasswordNotProvidedException
} = require("../../src/exceptions");

describe("Testando Junit com o lançamento de suas exceções", () => {
  it("Deve lançar um UsernameNotProvidedException se não tem username", () => {
    const args = [null, undefined, NaN, "", 0, false];

    args.forEach(arg => {
      expect(() => {
        testingException(arg, "123");
      }).toThrow(UsernameNotProvidedException);
    });
  });

  it("Deve lançar um PasswordNotProvidedException se não tem password", () => {
    const args = [null, undefined, NaN, "", 0, false];

    args.forEach(arg => {
      expect(() => {
        testingException("tupizz", arg);
      }).toThrow(PasswordNotProvidedException);
    });
  });

  it("Deve retornar um objeto válido com as credenciais certas", () => {
    const result = testingException("tupizz", "123senha");
    expect(result).toMatchObject({ username: "tupizz" });
    expect(result.id).not.toBeNull();
  });
});
