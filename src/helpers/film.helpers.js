export const filterFilmsByDirector = (list, searchDirector) => {
  if (searchDirector) {
    return list.filter((film) => film.director == searchDirector);
  } else return list;
};

export const getListOf = (list, prop) => {
  return list.reduce((uniqueValue, item) => {
    if (uniqueValue.indexOf(item[prop]) == -1) {
      uniqueValue.push(item[prop]);
    }
    return uniqueValue;
  }, []);
};
