function lengthOfLastWord(s: string): number {
  const arr: string[] = s.split(" ")
  for (let i=s.length - 1; i > 0; i--) {
      if (s[i] !== " ") {
          break
      } else {
          arr.pop()
      }
  }

  return arr[arr.length-1].length
  };

/*Solution Explanation
1.
  a. declare a new string array that is defined as string 's' split with respect to the spaces between the substrings

2.
  a. create a loop that itterates through the string 's' in REVERSE

  b. write a conditional that checks to make sure the last element of is NOT a space (" ")

  c. if the final substring is a <space> then remove it using .pop() return to the top of the loop
  */