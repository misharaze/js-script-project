"use strict";

function first (){
setTimeout(function(){
console.log(1);
}, 500);


}
function second(){
console.log(2);


}
first();
second();
function learnJS ( lang , callback){
console.log( `japprend :${lang}`);
callback();
}
function done(){
    console.log('étudier ce cours');
}

// on fait appel a la fonction done pour qu"elle qoit utliser a un moment donner
learnJS('Javsacript', done);
   
