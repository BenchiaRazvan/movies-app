import { Box, Typography } from "@mui/material";
import * as S from "./moviePage.styles";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useState } from "react";

export const MoviePage = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <S.MovieHeader>
        <Typography variant="h4">List of movies</Typography>
        <Box>
          <SearchBar
            value={query}
            onChange={(event) => setQuery(event)}
            placeholder="Search by name..."
          />
          <Typography>Query: {query}</Typography>
        </Box>
      </S.MovieHeader>
    </>
  );
};
