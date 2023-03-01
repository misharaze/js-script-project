"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('combien de films avez vous vu?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('combien de film avez vous vu?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};









function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('dernier films regarder', ''),
              b = prompt('quelle notes lui donneriez vous?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("beaucoup de films visioner");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("vous etes un utilisateur classique");
    } else if (personalMovieDB.count >= 30) {
        console.log("vous etes un cinéfil");
    } else {
        console.log("une erreur est survenue");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`votre genre préfer ${i}`);
    }
}

writeYourGenres();

//callback

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
       