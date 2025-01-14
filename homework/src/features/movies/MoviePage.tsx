import { Box, Typography } from "@mui/material";
import * as S from "./moviePage.styles";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Suspense, useState } from "react";
import { MovieList } from "./components/MovieList/MovieList";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../shared/components/ErrorFallback/ErrorFallback";
import { SkeletonLoader } from "../../shared/components/SkeletonLoader/SkeletonLoader";
import { QUERY_LABEL } from "../../shared/constants/textConstants";

export const MoviePage = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <S.MovieContainer>
      <S.MovieHeader>
        <Typography variant="h4">List of movies</Typography>
        <Box>
          <SearchBar
            value={query}
            onChange={(value) => setQuery(value.trim())}
            placeholder="Search by name..."
          />
          <Typography>{QUERY_LABEL + query}</Typography>
        </Box>
      </S.MovieHeader>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SkeletonLoader />}>
          <MovieList query={query} />
        </Suspense>
      </ErrorBoundary>
    </S.MovieContainer>
  );
};
