import { Typography } from "@mui/material";
import { useGetMovies } from "../../hooks/useGetMovies";
import { NO_MOVIES_FOUND_LABEL } from "../../../../shared/constants/textConstants";
import { useDebounce } from "../../../../shared/hooks/useDebounce";
import { DEBOUNCE_WAITING_TIME } from "../../../../shared/constants/numberConstants";
import { groupMoviesByDecade } from "../../utils/groupMoviesByDecade";
import { DecadeMovieList } from "../DecadeMovieList/DecadeMovieList";

interface MovieListProps {
  query: string;
}

export const MovieList = ({ query }: MovieListProps) => {
  const debounceValue = useDebounce(query, DEBOUNCE_WAITING_TIME);

  const { data: movies = [] } = useGetMovies(debounceValue);

  if (!movies.length && query)
    return <Typography>{NO_MOVIES_FOUND_LABEL}</Typography>;

  const moviesByDecade = groupMoviesByDecade(movies);

  return (
    <>
      {movies.length ? (
        Array.from(moviesByDecade.entries()).map(([decade, movies]) => {
          return (
            <DecadeMovieList key={decade} decade={decade} movies={movies} />
          );
        })
      ) : (
        <Typography>Use the search bar to view the list of movies.</Typography>
      )}
    </>
  );
};
