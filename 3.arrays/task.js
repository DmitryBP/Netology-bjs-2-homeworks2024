function compareArrays(arr1, arr2) {
  return arr1.every((el, i) => el == arr2[i] && arr1.length == arr2.length);
}

const getUsersNamesInAgeRange = (users, gender) => {
  if (users.length == 0 || (gender !== 'женский' && gender !== 'мужской'))
    return 0;
  let filtredByGenderArr = users.filter((el) => el.gender == gender);
  return (
    filtredByGenderArr.reduce((sum, b) => sum + b.age, 0) /
    filtredByGenderArr.length
  );
};
