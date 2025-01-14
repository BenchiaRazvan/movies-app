import "@testing-library/jest-dom";
import { groupMoviesByDecade, parseMovieYear } from "../../groupMoviesByDecade";
import { mockMovies } from "../../../__mocks__/mockMovies";

describe("CardComponent", () => {
  it("parse move year to number", () => {
    expect(parseMovieYear("1990")).toBe(1990);
    expect(parseMovieYear("2022-2205")).toBe(2022);
  });

  it("group movies by decades", () => {
    const result = groupMoviesByDecade(mockMovies);
    expect(result).toMatchSnapshot();
  });
});
