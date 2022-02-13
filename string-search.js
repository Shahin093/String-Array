const products = [
    'Dell Hardcore i29 200GB laptop',
    'iphone iTB camer flashlight Phone',
    'yellow laptop with bloack camera',
    '1X59 Lenovo Commercial Yoga laptop',
    'LG supernova laptop',
    'HTC low price del',
    'purple color phone with Laptop'
];

const searching = 'del';
// indexOf
const output = [];
// for (const product of products) {
//     if (product.toLowerCase().indexOf(searching) != -1) {
//         output.push(product);
//     }
// }
// console.log(output);
// includes()
// for (const product of products) {
//     if (product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product);
//     }
// }
// console.log(output);

// startWith() 
// for (product of products) {
//     if (product.toLowerCase().startsWith(searching)) {
//         output.push(product);
//     }
// }
// console.log(output);

for (product of products) {
    if (product.toLowerCase().endsWith(searching)) {
        output.push(product);
    }
}
console.log(output);
