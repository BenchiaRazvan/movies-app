import { render, screen } from "@testing-library/react";
import { MovieCard } from "./MovieCard.tsx";
import "@testing-library/jest-dom";
import { mockMovie } from "../../__mocks__/mockMovie.ts";

describe("CardComponent", () => {
  it("renders card elements", () => {
    render(<MovieCard movie={mockMovie} />);

    expect(screen.getByText("The Beta Test")).toBeInTheDocument();
    expect(screen.getByText("2021")).toBeInTheDocument();

    const cardMedia = screen.getByTestId("movie-card-media");
    expect(cardMedia).toHaveStyle(`background-image: url(${mockMovie.Poster})`);
  });
});
