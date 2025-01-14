import { useState } from "react";
import { Movie } from "../../types/movieTypes";
import { Button, Typography } from "@mui/material";
import * as S from "./decadeMovieList.styles";
import { LOAD_MORE_LABEL } from "../../../../shared/constants/textConstants";
import { MovieCard } from "../MovieCard/MovieCard.tsx";
import { VISIBLE_MOVIES_COUNT } from "../../../../shared/constants/numberConstants.ts";

interface DecadeMovieListProps {
  decade: string;
  movies: Movie[];
}

export const DecadeMovieList = ({ decade, movies }: DecadeMovieListProps) => {
  const [moviesDisplayedCount, setMoviesDisplayedCount] =
    useState(VISIBLE_MOVIES_COUNT);

  return (
    <S.DecadeContainer>
      <Typography variant="h5" data-testid="decade-movie">{decade}`s</Typography>
      <S.MoviesListContainer>
        {movies.slice(0, moviesDisplayedCount).map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </S.MoviesListContainer>
      {moviesDisplayedCount < movies.length ? (
        <Button
          variant="contained"
          sx={{ textAlign: "center" }}
          onClick={() => setMoviesDisplayedCount((prevCount) => prevCount + 3)}
          data-testid="load-more-movies-btn"
        >
          {LOAD_MORE_LABEL}
        </Button>
      ) : (
        <></>
      )}
    </S.DecadeContainer>
  );
};
