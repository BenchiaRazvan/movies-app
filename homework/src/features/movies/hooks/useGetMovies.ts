import { useQuery } from "react-query";
import { fetchMovies } from "../services/movieService";

export const useGetMovies = (query: string) => {
  return useQuery(["movie", query], () => fetchMovies(query), {
    enabled: !!query,
  });
};
