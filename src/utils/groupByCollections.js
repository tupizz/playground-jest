module.exports = (data, fieldName) => {
  let groupedByField = data.reduce(
    (acc, currentItem, index, fullArray) => {
      const groupedIndex = currentItem[fieldName];
      acc[groupedIndex].push(currentItem);
      return acc;
    },
    { male: [], female: [] }
  );

  return groupedByField;
};
