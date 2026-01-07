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
