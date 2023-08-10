function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])
  }

  function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) return 0;

    let result = users.filter(elem => elem.gender === gender);
    let result2 = result.reduce((acc, item) => {
        if(item.gender === 'мужской' || item.gender === 'женский') {
            return acc + item.age / result.length
        } else {
            return 0;
        }
    },0)
    return result2
  }