function hasTargetSum(array, target) {
  // Write your algorithm here
    let obj = {};

  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (obj[complement]) {
      return true;
    } else {
      obj[array[i]] = 1;
    }
  }
  return false;
}

/*
  Write the Big O time complexity of your function here
  O(n), since we now only iterate over the array once, and accesing
  keys on the object happens in constant time. We do create one new
  object, so the space complexity is slightly worse, but that object
  still grows linearly with the array, so it's still O(n) space complexity
*/

/*
  Add your pseudocode here

  have an empty object
  iterate over array
    for each element, declare a complement that adds up to target
    check if object has key of complement
      if it does, return true
    create/update key in object of current array value

  if loop finishes, return false
*/

/*
  Add written explanation of your solution here

  This is more time efficient than the nested array, because we are only
  iterating over the array once, and looking up the key in the object
  happens in constant time. Space complexity is slightly worse, because
  we make a new object, but it is still O(n)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
