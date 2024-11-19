let count = 0;

const increment = () => {
  count++;
};

const decrement = () => {
  count--;
};

const get = () => {
  return count;
};

module.exports = {
  increment,
  decrement,
  get,
};
