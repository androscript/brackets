module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  } else {
      for (var i = 0; i < bracketsConfig.length; i++) {
        if (str.includes(bracketsConfig[i].join(''))) {
          str = str.replace(bracketsConfig[i].join(''), '');
          if (str.length === 0) {
            return true;
          } else {
              i = -1;
          };
        };
      };
    return false;
  };
}
