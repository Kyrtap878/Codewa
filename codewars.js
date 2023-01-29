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
