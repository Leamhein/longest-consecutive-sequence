module.exports = function longestConsecutiveLength(array) {
  let set = new Set(array), //create new Set from array
  count =  1,
  maxCount = 1,
  currentNum;
  if (array.length == 0) { //if array is empty -> count = 0;
    return 0;
  };
  for (let key of set) { //find the initial number in the sequence
    if (!set.has(key - 1)) {
      currentNum = key;
      count = 1;
    };
    while (set.has(currentNum + 1)) { //count the sequence
      count++;
      currentNum++;
      if (maxCount < count) { //if this the biggest count
        maxCount = count;
      };
    };
  };
  return maxCount;
};
