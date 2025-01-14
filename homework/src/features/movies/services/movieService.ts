import { AxiosResponse } from "axios";
import { MoviesApiResponse } from "../types/movieTypes";
import { movieClient } from "./movieClient";

export const fetchMovies = async (query: string) => {
  if (!query) return;
  try {
    const response: AxiosResponse<MoviesApiResponse> = await movieClient.get(
      ``,
      {
        params: {
          s: query,
        },
      }
    );
    return response.data.Search;
  } catch (error) {
    throw new Error(error as string);
  }
};
