const numberOfFilms = +prompt('Cколько фильмов вы посмотрели?');

const personalMovieDb = {
      count: numberOfFilms,
      movies: {},
      genres: {},
      actors: [],
      private: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Как вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Как вы его оцените?', '');

numberOfFilms[a] = b,
numberOfFilms[c] = d;
console.log(numberOfFilms);
