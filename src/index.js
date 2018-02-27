module.exports = function longestConsecutiveLength(array) {
  var n = 1; //counter
  if (array.length > 0) {
    var nmax = 1; //max counter
  } else {
    nmax = 0;
  };
  array.sort((a, b) => a - b); //sorting our array
  for (let i = 1, length = array.length; i < length; i++) { //starting to count
    if (array[i] == array[i-1] + 1) { //if elements goes consistently
      ++n; // +1 to our counter
      if (n > nmax) {
        nmax = n; //update the max counter
      };
      } else {
        if (array[i] == array[i-1]) { //if there is a dublicate -> do nothing(skip it)
        } else {
          n = 1; //else -> reset the counter
        };
      };
    };
  return nmax;
  };
