const {
  PasswordNotProvidedException,
  UsernameNotProvidedException
} = require("../exceptions");

module.exports = (username, password) => {
  if (!username) {
    throw new UsernameNotProvidedException("Not provided username");
  }

  if (!password) {
    throw new PasswordNotProvidedException("Not provided password");
  }

  return { id: new Date().getTime(), username };
};
