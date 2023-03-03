"use strict";

let numberOfFilms;


                 //while (conditions) vient ensuite le bloc de code a executer
                //start est (une methode que on peut utiliser sur un object)



const personalMovieDB = {                            //object
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('combien de films avez vous vu?', '');
    
    while (  personalMovieDB.count== '' ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)) {
        personalMovieDB.count = +prompt('combien de film avez vous vu?', '');
        }
    },
        rememberMyFilms: function () {
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
            },
    detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
    console.log("beaucoup de films visioner");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("vous etes un utilisateur classique");
        } else if (personalMovieDB.count >= 30) {
        console.log("vous etes un cinéfil");
        } else {
        console.log("une erreur est survenue");
                }
            },
 showMyDB: function (hidden) {
    if (!hidden) {
    console.log(personalMovieDB);
                }
          },  
            toggleVisibleMyDB: function (){ //conditions faire passer privat en true
            if(personalMovieDB.privat){
                personalMovieDB.privat= false;
             } else{
                personalMovieDB.privat= true;
               }
              },
        
                                                      //cycle
         writeYourGenres: function () {
            for (let i = 1; i < 2; i++) {
               // let genre  = prompt(`votre genre préfer ${i}`);   //variables 
                  
               // if (genre === '' ||genre == null) {
       // console.log('vous navez pas entrer les bonnes inforrmations ');
       // i--;    //repetions retour en arriere si cil n'a pas renter les bonnes info
          //  }else{
               // personalMovieDB.genres[i - 1] = genre;  //inscrit les nouvelle info dans le massif genre 
    let genres  = prompt(`renter vos genre préfèrer espacer d'une virgule `).toLowerCase(); 
            
    if (genres === '' || genres == null) {
        console.log('vous navez pas entrer les bonnes inforrmations ');
        i--;    //repetions retour en arriere si cil n'a pas renter les bonnes info
            }else{
                personalMovieDB.genres = genres.split (', '); 
                personalMovieDB.genres.sort();
         //utiliser split pour indiquer que il faut que il mettent une virgule
                    }

       
            }

            personalMovieDB.genres.forEach((item, i) => {
           console.log(`genre preferer ${i + 1} - représente ${item}  `);

            });
           }
        
    }; 




                                       


