//Move the first letter of each word to the end of it, then add "ay" to the end of the word.
function pigIt(str) {
  const array = Array.from(str.split(" "));
  const output = [];
  for (let i in array) {
    let temp = [];
    for (let k in array[i]) {
      temp[k] = array[i][k];
    }
    output[i] = temp.reverse();
    output[i].push("ay ");
    output[i] = output[i].join("");
  }
  console.log(output.join(""));
}

//transform a number (integer) into a string.
function numberToString(num) {
  return num.toString();
}

//function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let i in arrayOfSheep) {
    if (arrayOfSheep[i] === true) {
      counter++;
    }
  }
  return counter;
}

//return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s)
{ 
  let output = "";
  let indexOfMiddleElement = s.length / 2 ;
  indexOfMiddleElement = Math.floor(indexOfMiddleElement);
  if(!(s.length % 2 === 0)){
    return output = s[indexOfMiddleElement];
  }else{
    return output = s[indexOfMiddleElement-1] + s[indexOfMiddleElement]
  } 
}

//Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
  str = str.toLowerCase();
 for(let i in str){
  if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){}else{return false;}
 }
 return true;
}

//Write a function which calculates the average of the numbers in a given list.
function findAverage(array) {
  let sum = 0;
  if(array.length === 0){return 0;}else{
  for(let i in array){
    sum += array[i];
  }
  sum = sum / array.length;
  return sum;
}
}

console.log(findAverage([]));