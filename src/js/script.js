"use strict";

const nuber0Films = +prompt ('conbien de films avez vousb regarder?','');
const personnalMovieDB = {
         count: nuber0Films,
         movies:{},
         actors:{},
         genre: [],
         privat:false

};
const a = prompt ( 'le dernier film visioner ?', ''),
b = prompt ('avez vous apprécier?',''),
c = prompt ('le dernier film visioner?', ''), 
d = prompt ( 'На сколько оцените его?','');

personnalMovieDB.movies[a]=b;
personnalMovieDB.movies[c]=d;

console.log(personnalMovieDB);

   
