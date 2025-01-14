import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../../types/movieTypes";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {

  return (
    <Card sx={{ width: 345 }} data-testid="movie-card-container">
      <CardMedia
        sx={{ height: 150 }}
        image={movie.Poster}
        title={movie.Title}
        data-testid="movie-card-media"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {movie.Year}
        </Typography>
      </CardContent>
    </Card>
  );
};
