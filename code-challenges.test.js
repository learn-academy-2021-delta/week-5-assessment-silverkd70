// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//pseudo code

// declare a constant variable
// use the string perameter in the function action
// set a new variable and use built-in method replace with regular expressions to loop through the string with global and ignore 
// set replace loop to convert string letter to required number
// return the new variable to return the coded message output

// a) Create a test with expect statements using the variables provided.

describe('textCoder', () => {
    test("takes in a string and converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 and returns a coded string", () => {
        expect(textCoder("Lackadaisical")).toEqual("L4ck4d41s1c4l") 
        expect(textCoder("Gobbledygook")).toEqual("G0bbl3dyg00k") 
        expect(textCoder("Eccentric")).toEqual("3cc3ntr1c")
    })
})

//test failed
    //ReferenceError: textCoder is not defined
//rewriting code to define textCoder, then running second test

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.

const textCoder = (str) => {
    let stringCode = str.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0');
      return stringCode;
  }



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

//pseudo code

// declare a constant variable
// use the array and string perameter in the function action
// set a new variable to filter the array 
// call on the value function to return the value to iterate through the array and set to lowercase and use the built-in method to include the string
// return the new variable array to output only the words in the array that are associated with the variable letter assigned.

// a) Create a test with expects statement using the variable provided.

describe('wordFinder', () => {
    test("takes in an array of words and a single letter string and returns a new array containing only the words that include the single letter string defined", () => {
        expect(wordFinder(["Apple", "Banana", "Plum", "Orange", "Kiwi"], "a")).toEqual(["Apple", "Banana", "Orange"]) 
        expect(wordFinder(["Mango", "Cherry", "Apricot", "Blueberry", "Peach"], "e")).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

//test failed
    //ReferenceError: wordFinder is not defined
//rewriting code to define wordFinder, then running second test

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]



// b) Create the function that makes the test pass.

const wordFinder = (arr, str) => {
    let newArr = arr.filter(words => {
      return words.toLowerCase().includes(str)
      
  })
  return newArr;
  }



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//pseudo code

// declare a constant variable
// use the array perameter in the function action
// declare a new variable to create an array with two indexes set to 0 in order to set up a number count verification
// use conditionals and two for loops to iterate through two separate indexes to count and identify duplicate numbers
// set if and else if conditionals to determine if the array of numbers = truthy or falsey for a "full house" of exactly one pair and one three of a kind.
// create returns on each if and else if conditionals

// a) Create a test with expect statements using the variable provided.

describe('handChecker', () => {
    test('takes in an array of 5 numbers and iterates through each number to identify if the array has 3 like numbers + 2 other like numbers for a truthy or else the array of numbers is falsey.', () => {
        expect(handChecker([5, 5, 5, 3, 3])).toBe(true) 
        expect(handChecker([5, 5, 3, 3, 4])).toBe(false)
        expect(handChecker([5, 5, 5, 5, 4])).toBe(false)
    })
})

//test failed
    //ReferenceError: handChecker is not defined
//rewriting code to define handChecker, then running second test

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.

const handChecker = (arr) => {
    let handCount = [0,0]
    //let numChecker = 0  //not sure why I created this because it is not necessary for this to work. 
    for (i=0; i<arr.length; i++){
        if (arr[0] === arr[i]){
            handCount[0]++
        }
        else {
            numChecker = arr[i]
        }
      }
    for (i=0; i<arr.length; i++){
        if (arr[i] === numChecker){
              handCount[1]++
            }
    } if ((handCount[0] !== 2) && (handCount[0] !== 3)){
        return false
    } else if (arr[i] === numChecker){
            handCount[1]++
        
    } else if ((handCount[1] !==2) && (handCount[1] !==3)){
        return false
    } else {
      return true
  }
  }