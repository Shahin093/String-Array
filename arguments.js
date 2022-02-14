function addNumbers(num1, num2) {
    let sum = 0;
    for (const num of arguments) {
        sum = sum + num;
    }
    return sum;;
}
const sum = addNumbers(23, 13, 100, 50, 14);
console.log(sum);

function getFullName(fristName, lastName) {
    // const fullName = fristName + lastName;
    let count = ' ';
    for (const name of arguments) {
        count = count + name;
    }
    return count;

}
console.log(getFullName("Hanif", ' Songket', ' Shidul', ' Islam'));