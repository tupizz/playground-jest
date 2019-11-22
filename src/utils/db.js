module.exports.getCustomerSync = id => {
  console.log("Reading customer from db...");
  return { id: id, points: 11 };
};

module.exports.getCustomer = id => {
  return new Promise((resolve, reject) => {
    console.log("Reading customer from db...");
    resolve({ id: id, points: 11 });
  });
};
