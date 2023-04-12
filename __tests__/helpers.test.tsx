import "@testing-library/jest-dom";
import { formatDate } from "../helpers/helpers";

describe("formatDate", () => {
  it("renders empty string when no date provided", () => {
    expect(formatDate("")).toBe("");
  });

  it("formats a date", () => {
    expect(formatDate("2002-02-12")).toBe("12 Feb, 2002");
  });
});
