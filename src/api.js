const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push((i % 12) + ":00 PM");
    }
    if (random() > 0.5) {
      result.push((i % 12) + ":30 PM");
    }
  }
  return result;
};

export const submitAPI = function (formData) {
  return true;
};
