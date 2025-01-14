import { MAXIMUM_NUMBER_OF_DECADES } from "../../../shared/constants/numberConstants";
import { Movie } from "../types/movieTypes";

export const parseMovieYear = (year: string): number => {
  const parsedYear = year.includes("–")
    ? parseInt(year.split("–")[0])
    : parseInt(year);

  return parsedYear;
};

export const groupMoviesByDecade = (movies: Movie[]) => {
  movies.sort((currentMovie, nextMovie) => {
    const currentMovieYear = parseMovieYear(currentMovie.Year);
    const nextMovieYear = parseMovieYear(nextMovie.Year);

    return nextMovieYear - currentMovieYear;
  });

  let numberOfDecades = 0;

  const groupedMovies = movies.reduce((acc: Map<string, Movie[]>, movie) => {
    const movieYear = parseMovieYear(movie.Year);
    const decadeYear = (movieYear - (movieYear % 10)).toString();

    if (!acc.has(decadeYear) && numberOfDecades < MAXIMUM_NUMBER_OF_DECADES) {
      acc.set(decadeYear, []);
      numberOfDecades++;
    }

    acc.get(decadeYear)?.push(movie);

    return acc;
  }, new Map());

  return groupedMovies;
};
