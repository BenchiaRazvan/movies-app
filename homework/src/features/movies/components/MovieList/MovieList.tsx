import { Typography } from "@mui/material";
import { useGetMovies } from "../../hooks/useGetMovies";
import { NO_MOVIES_FOUND_LABEL } from "../../../../shared/constants/textConstants";

interface MovieListProps {
  query: string;
}

export const MovieList = ({ query }: MovieListProps) => {
  const { data: movies = [] } = useGetMovies(query);

  if (!movies.length && query)
    return <Typography>{NO_MOVIES_FOUND_LABEL}</Typography>;

  return (<Typography>Movie list: </Typography>)
};
