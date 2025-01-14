import axios from "axios";

export const movieClient = axios.create({
  baseURL: `${import.meta.env.VITE_OMDB_BASE_URL}?i=tt3896198&apikey=${
    import.meta.env.VITE_OMDB_API_KEY
  }`,
});
