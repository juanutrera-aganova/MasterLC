/* 3.1 Clone
Implementa una función clone que, a partir de un objeto de entrada 
source devuelva un nuevo objeto con las propiedades de source:
*/

var player = {
    name: "Juninho",
    position: "DEL",
    age : 29,
    goals: 231,
    assists: 136,
    clebration:function(){
        console.log("Siiiiiiiu");
    }
}

function clone (source){
    var obj={};
    for(var prop in source){
        console.log(prop, source[prop])
        obj[prop] = source[prop];
    }
    return obj;
}

var copy = clone(player);
console.log(copy);
copy.clebration();
console.log(copy ===player);