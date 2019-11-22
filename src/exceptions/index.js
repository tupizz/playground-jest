class UsernameNotProvidedException extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, UsernameNotProvidedException);
  }
}

class PasswordNotProvidedException extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, PasswordNotProvidedException);
  }
}

module.exports = { UsernameNotProvidedException, PasswordNotProvidedException };
