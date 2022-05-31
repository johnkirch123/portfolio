const createObject = (array) => {
  const object = {};
  array.forEach((ele) => {
    object[ele] = object[ele] ? (object[ele] += 1) : 1;
  });
  return object;
};

module.exports = { createObject };
