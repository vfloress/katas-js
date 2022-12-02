const isBisiesto = (year) => {
  return (
    year % 4000 !== 0 &&
    (year % 100 !== 0 || year % 400 === 0) &&
    year % 4 === 0
  );
};

const getBisiestosFromRang = (from, to) => {
  return [...Array(to - from + 1).keys()]
    .map((x) => x + from)
    .reduce((acc, current) => {
      return isBisiesto(current) ? [...acc, current] : acc;
    }, []);
};

module.exports = { isBisiesto, getBisiestosFromRang };

