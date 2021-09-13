/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
console.log(`-------1--------`)

function twoSums(int1, int2) {
    if (int1 == int2){
        return (int1 + int2) * 3;
    } else {
        return int1 + int2;
    }
}
console.log(twoSums(10,5))
/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
console.log(`-------2--------`) 

function checkInt(int1, int2) {
    if (int1 === 50 || int2 === 50){
        return true;
    }
    if ((int1 + int2) === 50){
        return true;
    } else {
        return false;
    }
}
console.log(checkInt(46,4))
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
console.log(`-------3--------`) 

let givenString = 'Alexander'
function removeChar(position, string) {
  let result = string.slice(0, position) + string.slice(position + 1)
  
    return result
}
console.log(removeChar(3, givenString))
/* 4. Create a function to find and return the largest of three given integers. */
console.log(`-------4--------`) 

function maxOf3Int(x, y, z) 
 {
//   maxVal = 0;
//   if (x > y)
//   {
//     maxVal = x;
//   } else
//   {
//     maxVal = y;
//   }
//   if (z > maxVal)  // This method also works but it is longer
//   {
//     maxVal = z;
//   }
//   return maxVal;

let maxValue = Math.max(x,y,z) // Simplified method
return maxValue
}
console.log(maxOf3Int(5,40,20))

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
console.log(`-------5--------`)

function checkRange(num1, num2) {
    if (num1 >=40 && num1 <=60 && num2 >=40 && num2 <=60 ||
        num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100) {
            return true;
        } else {
            return false;
        }
}
console.log(checkRange(80,100))
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
console.log(`-------6--------`) 

function createString(string, copy){
    let result = string.repeat(copy)
    return result
}
console.log(createString('Alex', 3))

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
console.log(`-------7--------`)

let city = [
    {name: 'Los Angeles'},
    {name: 'New York'}
]

function displayCity(string){
    if (string.startsWith('Los') || string.startsWith('New')){
        return true
    } else {
        return false;
    }
    
}
console.log(displayCity('New'))
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
    console.log(`-------8--------`) 

let elementArray = [15, 20, 40];
function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i]
    }
    return sum;

}
console.log(calculateSum(elementArray))
/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
console.log(`-------9--------`)

// function contain(array) {
//     if ((array.includes(1)) || (array.includes(3))) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(contain([1, 3])) //This method also works

let numbersArrays = [1,2,6,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
function contains(array) {
    array = [1,3];
    for (let i = 0; i < array.length; i++) {
      if (numbersArrays.some( el=> array.includes (el)) || numbersArrays.some( ai=> array.includes (ai))) { //Dynamic approach
        return true
      } 
    } 
    return false;
}
console.log(contains(numbersArrays))


/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 
    console.log(`-------10--------`) 

    function doesNotContain(array) {
        if (!(array.includes(1)) && !(array.includes(3))) {
            return true
        } else {
            return false
        }
    }
    
    console.log(doesNotContain([1, 3]))

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 
console.log(`-------11 --------`)

let arrayOfStrings = ['Elephant', 'Hippotamus', 'Rhino'];
function findLongestString(array){
    let longestString = '';

    array.forEach(function(word) {
        if (word.length > longestString.length){
            longestString = word;
        }
    })
    return longestString;
}
console.log(findLongestString(arrayOfStrings))

/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
console.log(`-------12--------`) 

function findType(angle){
    if (angle < 90){
        return 'acute'
    } else if (angle === 90){
        return 'right'
    } else if (angle < 180){
        return 'obtuse'
    } else if (angle === 180){
        return 'straight'
    } else {
        return `Invalid`
    }
}
console.log(findType(180))

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
console.log(`-------13--------`) 

function indexOfGreatest(array) {
    if (array.length === 0) {
        return -1;
    }

    let max = array[0];
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            maxIndex = i;
            max = array[i];
        }
    }

    return maxIndex;
}
console.log(indexOfGreatest(elementArray))
/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
console.log(`-------14--------`) 

let  evenNumberArray = [2, 4, 6, 24, 80, 7, 14];

function findLargestEvenNumber(array){
    let newEvenNumberArray = []
     let largestEvenNumber = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                newEvenNumberArray.push(array[i])
                console.log(newEvenNumberArray)
            }
        }

        // Math.max.apply(null, newEvenNumberArray)
        largestEvenNumber = Math.max.apply(null, newEvenNumberArray)
        return largestEvenNumber
    }

console.log(findLargestEvenNumber(evenNumberArray))
 

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
    console.log(`-------15--------`) 

function checkGivenInt(int1, int2){
    if (int1 > 0 && int2 < 0){
        return true;
    } else {
        return false;
    }
}
console.log(checkGivenInt(10, -5))
/* 16. Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
    console.log(`-------16--------`) 
    
    let randString = 'lebron'

    function converString(str){

    let result = str.toUpperCase().slice(0,3) + str.slice(3)
    if (result.length < 3){
        result = result.toUpperCase()
    }
    return result
    }
    console.log(converString(randString))


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
    console.log(`-------17--------`) 

function sumOf2Int(int1, int2){
    let sum = int1 + int2
    if(sum >= 50 && sum <= 80){
        return 65
    }else{
        return 80
    }

}

    console.log(sumOf2Int(10, 51))

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
console.log(`-------18--------`) 

function returnBasedOnFactor(num){

    let name = ''

   if(num % 3 == 0){
      return name = name + 'Diego'
   } else if(num % 5 == 0){
       return name = name + 'Riccardo'
   } else if(num % 7 == 0){
       return name = name + 'Stefano'
   }


}
console.log(returnBasedOnFactor(105))

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
console.log(`-------19--------`) 

function acronym(phrase){
    let firstLetters = []
   
   for(let i = 0; i< phrase.split(' ').length; i++){
    firstLetters.push(phrase.split(' ')[i].slice(0,1))
   }
   
   return firstLetters.join('').toLocaleUpperCase()
}
console.log(acronym('British Broadcasting Corporation '))