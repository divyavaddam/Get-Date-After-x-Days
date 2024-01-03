const currentDate = (x) => {
  const { addDays } = require("date-fns");
  const date = addDays(new Date(2020, 7, 22), x);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
module.exports = currentDate;
