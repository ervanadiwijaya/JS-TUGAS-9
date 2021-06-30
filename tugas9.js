function dataFilm(params) {
    var film = {
        judul : 'the avengers end game',
        durasi : 120,
        genre : 'action',
        studio : 'marvel cinematic studio',
        tahun : 2019
    }

    film.durasi = 140;

    for (let x in film) {
        console.log(film[x]);
        
    }  
}

dataFilm();