/**
 * My solution
**/
function removeElement1(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
      if (val === nums[i]) {
          nums.splice(i, 1)
          i = i-1
          console.log(nums)
      // } else if (nums.includes(nums[i])){
      //     nums.splice(i, 1)
      //     console.log(nums)
      }
  }
  return val
};

/**
 * Optimal Solution
 */
function removeElement2(nums: number[], val: number): number {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};