/* 1. Given a string (as a parameter), return the character that is most commonly used. */
let string = 'alexander'
function getMaxOccuringChar(string)
{
 
    // Create array to keep the count of individual
    // characters and initialize the array as 0
    let count = new Array(string);
    for (let i = 0; i < string; i++)
    {
        count[i] = 0;
    }
     

    // Construct character count array from the input
    // string.
    let len = string.length;
    for (let i = 0; i < len; i++)
    {
        count[string[i].charCodeAt(0)] += 1;
    }
    let max = -1;   // Initialize max count
    let result = ' ';   // Initialize result
     
    // Traversing through the string and maintaining
    // the count of each character
    for (let i = 0; i < len; i++)
    {
        if (max < count[string[i].charCodeAt(0)])
        {
            max = count[string[i].charCodeAt(0)];
            result = string[i];
        }
    }
    return result;
}
console.log(getMaxOccuringChar('Alex'))
 

/* 2. Check if two strings (passed as parameters) are anagrams of each other. 
    Do not consider spaces or punctuation, make the whole word lower case. 
    Return `true` if the words are anagram, return `false` if they aren't. */
function isAnagram(string1, string2) {
    if (string1.split('').sort().join('') === string2.split('').sort().join('') ){
        return true;
    } else {
        return false;
    }
}
console.log(isAnagram('21','21'))
/* 3. Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
    Ex. "listen" is the word, ["enlist", "google", "inlets"] are the possibilities: the output should be ["enlist", "inlets"]
*/
// let list = ["enlist", "google", "inlets"];

// function listPossibleAnagrams(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i].split('').sort().join(''))
//     }
//     newArray.reverse()
// }
/* 4. Given a string (as parameter), return `true` if the string is a palindrome or `false` if it is not. Include spaces and punctuation. */
function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    let re = /[\W_]/g; 
    
    let lowRegStr = str.toLowerCase().replace(re, '');       
    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    let reverseStr = lowRegStr.split('').reverse().join('');  
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; 
  }
   
  console.log(palindrome("A man, a plan, a canal. Panama"));

/* 5. Given an integer (as parameter), return an integer which digitas are the same as the original number, but reversed.
    Ex: 189 â‡’ 981 */
function reversedInt(int){
    // console.log(int.toString().split('').reverse().join(''))
 return int.toString().split('').reverse().join('')
} 
console.log(reversedInt(981))

/* 6. Write a function that takes a positive number X as a parameter. The function should output (as console.log) a step shaped string with X level usign the `#` character. Make sure the steps are on the right hand side:

	2 steps:
        '# '
        '##'
    3 steps:
        '#  '
        '## '
        '###'
    4 steps:
        '#   '
        '##  '
        '### '
        '####'
*/ 


/* 7. Create a function that, given a string as a parameter, returns a new string which is the original string, but reversed: 
"hello" â‡’ "olleh" */

function reverseString(string) {
    let newArray = [];
    for (let i = 0; i < string.length; i++) {
        newArray.push(string.split('').reverse().join(''));
    }
    return newArray;
}
console.log(reverseString('hello'));

/* 8. Create a function that takes an array and a "chuck size" as parameters. 
    Divide the array into subarrays with the "chunk size" as lenght: 
    array: [1, 2, 3, 4], chunk size: 2 â†’ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], chunk size: 4 â†’ [[ 1, 2, 3, 4], [5]]
*/


/* 9. Write a function that accepts a positive number X as parameter. 
The function should console.log a pyramid shape with N levels built using the `#` character. 
Example with X = 3

```
 '  #  '
 ' ### '
 '#####'
```
*/
function tree(height){
    for (let i = 0; i < height; i++){
        let stars = "#".repeat(2 * i +1)
        let spacesBefore = " ".repeat(height - i - 1)
        console.log(spacesBefore + stars)
    }
}
tree(5)


/* 10. Write a function that accepts an integer N and returns a NxN spiral matrix:
Ex: 

N = 2
[[1, 2],
[4, 3]]
N = 3
[[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]
N = 4
[[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10,  9,  8, 7]]

*/