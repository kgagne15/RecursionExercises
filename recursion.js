/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */
//used solution for help
function longest(words, idx = 0, longestWord = 0) {
  if (words.length === idx) {
    return longestWord;
  }
  if (words[idx].length > longestWord) {
      longestWord = words[idx].length;
  }
    return longest(words, idx + 1, longestWord)    
}
/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newString = '') {
  if (str.length === idx) {
      return newString;
  }
  if (idx % 2 === 0) {
      newString += str[idx];
  } 
  return everyOther(str, idx + 1, newString)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=str.length-1, newString='') {
  if (idx === -1) {
         if (newString === str) {
             return true;
         }
      return false;
    }
  newString += str[idx]
  return isPalindrome(str, idx - 1, newString)
 }

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr.length === idx) {
      return -1;
  }
  if (arr[idx] === val){
      return idx;
  } 
  return findIndex(arr, val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length-1, newString = '') {
  if (idx === -1) {
      return newString;
  }
  newString += str[idx]
  return revString(str, idx - 1, newString)
}

/** gatherStrings: given an object, return an array of all of the string values. */

//used solution for help
function gatherStrings(obj) {
  let strArr = []
  for (let k in obj) {
      if (typeof obj[k] === 'string') {
          strArr.push(obj[k])
      }
      if (typeof obj[k] === 'object') {
          strArr.push(...gatherStrings(obj[k]))
      }
  }
return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

//further study, copied from solution
function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
