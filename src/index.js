module.exports = function check(str, bracketsConfig) {
  let arrLeft = [];
  let arrRight = [];
  let res = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    arrLeft.push(bracketsConfig[i][0]);
    arrRight.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    let first = arrRight.indexOf(str[i]);
    let second = arrLeft.indexOf(str[i]);

    if (first !== -1) {
      let top = res[res.length - 1];

      if (first === second && (top !== str[i] || res.length === 0)) {
        res.push(str[i]);
      } else if (arrLeft.indexOf(top) === first) {
        res.pop();
      } else {
        return false;
      }
    } else {
      res.push(str[i]);
    }
  }

  return res.length === 0;
}