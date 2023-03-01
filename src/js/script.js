"use strict";

let number0Films;
 
function start (){
number0Films =  +prompt ('combien de films avez vous regarder?','');
 while (number0Films == ''|| number0Films == null || isNaN(number0Films)){
    number0Films =  +prompt ('combien de films avez vous regarder?','');
  }
}

start();



    const personnalMovieDB = {
        count: number0Films,
        movies:{},
        actors:{},
        genre: [],
        privat:false

};




function rememberMyfilms(){

for ( let i = 0; i <2; i++){
    const a = prompt ( 'le dernier film visioner ?', ''),
    b = prompt ('avez vous apprécier?','');

    if (a != null && b != null && a  != "" &&  b != "" && a.length <50 ){
        personnalMovieDB.movies[a] = b;
        console.log('done');
     } else {
            console.log('error');
            i--;
        }
    }
}
//rememberMyfilms();


function detectPersonnallevel(){

    if(personnalMovieDB.count<10){
        console.log("peu de film visioner");
      }else if (personnalMovieDB.count >=10 && personnalMovieDB.count >30)
       console.log("vous etes un utilisateur classique ");
   else if (personnalMovieDB.count >=30 ){
        console.log("vous etes un habituer ");
  }else{ console.log("une arreur est survenue");
  
  }
}

//detectPersonnallevel();

function showMyDB(hidden){
if (!hidden) {
    console.log(personnalMovieDB);

}
}
  showMyDB(personnalMovieDB.privat);

console.log(personnalMovieDB);

//cycle se  commence a 1 et se repete 3 fois 

function writeYourGenres(){
for(let i = 1; i <=3; i++ ) {

personnalMovieDB.genre[i - 1] = prompt(`votre genre préferer ${i}`);
}

}

writeYourGenres ();
