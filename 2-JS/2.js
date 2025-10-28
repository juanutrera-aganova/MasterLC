/*2  Concat
Implementa una función concat (inmutable) tal que,
 dados 2 arrays como entrada, devuelva la concatenación de ambos. 
Utiliza rest / spread operators.

*/


const array1 = ["Raul", "Delantero", 7];
const array2 = [356, 126];

const concat = (a,b) => [].concat(a,b);

console.log(concat(array1, array2));

//const concat2 = (...args) =>