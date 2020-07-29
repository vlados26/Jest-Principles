// function expect(value) {
//     return {
//         toBe: (exp) => {
//             if (value === exp) {
//                 console.log('Success');
//             } else {
//                 console.log('Wrong');
//             }
//         }
//     }
// }
// excect(sum(40, 2)).toBe(42);

const sum = (a, b) => a + b;
const nativeNull = () => null;


module.exports = {
    sum,
    nativeNull
}