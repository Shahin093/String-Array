const numbers = [3, 4, 2, 5, 2, 7, 3, 9, 6];
// sort an array 
const sorteNumbers = numbers.sort();
// console.log(sorteNumbers);

const friends = ['Tuhin', "Shahin", "Hridoy", "Cheful", "Kuddus", 'Akash'];
const sorteFriends = friends.sort();
// console.log(sorteFriends);

// Reverse 
const reverseFriends2 = friends.reverse();
// console.log(reverseFriends2);

// number sorting fun 
const bigNumber = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);
