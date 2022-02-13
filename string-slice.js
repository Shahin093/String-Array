const anthem = 'Amar Somar Bangla Ami Tomai Balobasi';
const words = anthem.split(" ");
const withoutA = anthem.split("a");
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(1, 7);
// console.log(smallSlice);
// substr()
const anotherPart = anthem.substr(0, 6);
// console.log(anotherPart);

// substring ()
const anaotherAnotherPart = anthem.substring(11, 15);
// console.log(anaotherAnotherPart);

// concat 
const first = 'amader';
const second = 'City';
// const fullSting = first + ' ' + second;
const fullSting = first.concat(" ", second);
// console.log(fullSting);
//join()
const words2 = ['s', 'h', 'a', 'h', 'i', 'n'];
const allJoined = words2.join('');
console.log(allJoined);


