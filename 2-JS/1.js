
const array = ["Delantero","Paco", 37, true, "2021-05-05T10:00:00"];
console.log(array);
/*
1.1 Head
Implementa una función head (inmutable), tal que, 
dado un array como entrada extraiga y devuelva su primer elemento. 
Utiliza destructuring.
*/

const head = ([first]) => first;

console.log(head(array));

/*1.2 Tail
Implementa una función tail (inmutable), tal que, 
dado un array como entrada devuelta todos menos el primer elemento. 
Utiliza rest operator.

*/
const tail = ([first, ...others]) => others;

console.log(tail(array));

/*
1.3. Init
Implementa una función init (inmutable), tal que, 
dado un array como entrada devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype.
*/

const init = (a) => a.slice(0,-1);

console.log(init(array));

/*
1.4 Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
*/
const last = (a)=> a.slice(-1);

console.log("1.4: "+last(array));

console.log(array);