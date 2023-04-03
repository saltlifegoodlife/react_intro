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

export const getFilmStats = (arr) => {
  console.log(arr);
  let acc = 0;
  let latestReleaseDate = 0;

  acc = arr.reduce((x, curr) => x + parseInt(curr.rt_score), 0);
  let avg = acc / arr.length;
  let tot = arr.length;
  arr.forEach((e) => {
    if (latestReleaseDate < e.release_date) {
      latestReleaseDate = e.release_date;
    }
  });
  console.log(acc, avg, tot, latestReleaseDate);
  return {
    avg_score: avg,
    acc_score: acc,
    total: tot,
    latest: latestReleaseDate,
  };
};
