/*
This is a solution for the valid parentheses leetcode
problem, and accompanying notes that explain the solution
step by step

Time Complexity = O(n)
  - Each element in the string will be visited once
  - n = length of string

Space complexity = O(n)
  - This solution places "n" elements in a placeholder
    array
  - n = number of elements stored in placeholder
*/

function isValid(s: string): boolean {
  const order: String[] = [] //placeholder array
  const map = new Map ([
    [")", "("],
    ["]", "["],
    ["}", "{"]
  ])
  let flag = false; //flag to be raised for mismatched braces
  //openingBraces will be used when comparing values down the line
  const openingBraces = Array.from(map.values())

  for (let i=0; i < s.length; i++) {
    //conditional to check if the element
    if (openingBraces.includes(s[i])) {
      order.push(s[i])

    //if the current element s[i] is not an opening bracket do the following
    } else {
      const openingBrace = order.pop()
      const expectedBrace = map.get(s[i])
      if (openingBrace !== expectedBrace) {
        flag = true;
        break
      }
    }
  }

  return !flag && !order.length
};

/* Solution Explanation
1.
  a. create an empty string array (order) this will be used to help the function
  determine the correct order in which the opening parenthases need to be closed
  this also helps us determine if an opening brace is left unclosed in the original string parameter

  b. create a map of the correct parenthases pairs that are considered
    [key, value]
    [")", "("],
    ["]", "["],
    ["}", "{"]
  it helps to assign the closing braces to the key elements because closing braces will pull their value pairs from the map to compare with what they are trying to close from the string parameter

  c. also create a flag that will be raised if a closing parenthases is trying to close a non-matching opening parenthases - set the flag to false to start

  d. create an array of opening braces this will be used to check if a given element in the string is an opening brace

2.
  a. create a loop that will itterate through the parameter string once.

  b. create a conditional statement that checks if the current string element [i] is an opening brace
    i) if s[i] is an opeining brace add it to the placeholder array (order)

    ii) if s[i] is not an opening brace continue to step 3

3.
  a. if s[i] is not an opening brace declare 2 variables
  in this example they are openingBrace and expectedBrace

  b. openingBrace will be defined using order.pop()
  [the order in which the opening braces will need to be closed is the reverse order of the placeholder array]

  c. expected brace will be pulled from the map
  [if the function has progressed to this part of the conditional s[i] will be a closing brace (or an invalid char)]

4.
  a. write a conditional to compare openingBrace and expectedBrace so that if openingBrace !== expectedBrace the flag will be raised and the loop will break

5.
  a. after the loop finishes itterating over string 's' the flag should be unraised and the placeholder array (order) should be empty 
  [return !flag && !order.length === return true && true]

  b. if the flag is raised, that means either there was a mismatched brace pair or there was an invalid char in the string 's'

  c. if order.length is not 0, !order.length will return true this means that there was an unclosed opening brace in the string 's'
*/
