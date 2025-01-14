import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DecadeMovieList } from "./DecadeMovieList";
import { mockMovies } from "../../__mocks__/mockMovies";

const decade = "1990";

describe("DecadeMovieList", () => {
  it("render decade", () => {
    render(<DecadeMovieList movies={mockMovies} decade={decade} />);

    expect(screen.getByText("1990`s")).toBeInTheDocument();
  });

  it("render first movies without clicking on load more button", () => {
    render(<DecadeMovieList movies={mockMovies} decade={decade} />);

    const renderedMovies = screen.getAllByTestId("movie-card-container");
    expect(renderedMovies).toHaveLength(3);
  });
  it("load cards when the user click on load more button", () => {
    render(<DecadeMovieList movies={mockMovies} decade={decade} />);

    const cardMedia = screen.getByTestId("load-more-movies-btn");
    expect(cardMedia).toBeInTheDocument();
    fireEvent.click(cardMedia);

    const renderedMovies = screen.getAllByTestId("movie-card-container");
    expect(renderedMovies).toHaveLength(5);
  });
  it("load empty array", () => {
    render(<DecadeMovieList movies={[]} decade={""} />);
    expect(
      screen.queryByTestId("movie-card-container")
    ).not.toBeInTheDocument();
  });
});
