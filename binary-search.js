function linearSearch (arr, target) {

  // Can you solve this in one line?

  return ret = arr.indexOf(target);;
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lowI = 0;
  let highI = arr.length - 1;

  // While high and low indices do not overlap...
  while (lowI <= highI) {
    // Find the midpoint between high and low indices
    let midI = Math.floor((highI + lowI) / 2);
  
    let midpoint = arr[midI];

    // Compare the target value to the midpoint value
    

    // If the target equals the midpoint...
      // Return the midpoint index
  
      if (target === midpoint) return midI;
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      if (target > midpoint) lowI = midI + 1;
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      if (target < midpoint) highI = midI - 1;
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

module.exports = [linearSearch, binarySearch]
