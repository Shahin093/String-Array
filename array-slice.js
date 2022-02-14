const numbers = [4, 6, 3, 6, 25, 3, 6, 3, 21, 45, 87];
// slice 
// const numberSlice = numbers.slice(4, 6);
// console.log(numberSlice);

// spice(start,end) splice to remove an element from an array
// const nmberSpliced = numbers.splice(4, 2);
// console.log(nmberSpliced);
// console.log(numbers);
const nmberSpliced2 = numbers.splice(4, 2, 111, 222, 333, 444, 555);
console.log(nmberSpliced2);
console.log(numbers);
