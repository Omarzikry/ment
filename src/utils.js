export const returnObject = (state, changedProperty) => {
  return {
    ...state,
    ...changedProperty
  };
};

// =========== transform milliseconds to date =========== //
export const handleDate = createdDate => {
  const date = new Date(+createdDate),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDay();
  return `${day}/${month}/${year}`;
};
