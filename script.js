/* 
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


function sumOfTripledEvens(array) {
  
  console.log(array);
 

    const evenNumber = array.filter((num) => num % 2 == 0);
    console.log(`Even numbers: \n${evenNumber}`);
    
    const timesThree = evenNumber.map((num) => num * 3);
    console.log(`Times Three: \n${timesThree}`);

    const sumOfAll = timesThree.reduce((total, current) => {return total + current}, 1)
    console.log(`Sum: \n${sumOfAll}`);
    return;
  
}
console.log(sumOfTripledEvens(arr)); 
*/

/* 
function camelize(str) {
  return str
  //creates an array of the input
    .split('-')
  //iterates over the array and asks if index = 0, leaves it at the word, else capatalize first word of next object/word and parses rest of the word using slice
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
  //joins the array together to a string.
    .join('');

} 

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition'); 
*/

/*
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function filterRange(arr, a, b) {
  //creates a filtered array in between the to given arguments a and b. To reverse swap the operators 'bigger than' and 'lesser then'
    const filtered = arr.filter(num => (num >= a && num <= b));
    console.log(filtered);
}

console.log(filterRange(array, 5, 10));
*/

/*
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let reverseArray = array.reverse();
console.log(reverseArray);
*/

/*
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// reverses array in descending order
let sorted = array.sort((a, b) => b - a);
console.log(sorted);
*/



