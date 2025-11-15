import { parsePosition, getRotation } from "./gridHelper";
import { GRID_ERRORS } from "../../constants/errorMessages.js";

describe("parsePosition", () => {
  it("parses valid input correctly", () => {
    const result = parsePosition("1,2 NORTH");
    expect(result).toEqual({
      parsed: { x: 1, y: 2, direction: "NORTH" },
      errors: [],
    });
  });

  it("returns errors for missing input", () => {
    const result = parsePosition("");
    expect(result.errors).toContain(GRID_ERRORS.INVALID_FORMAT);
  });

  it("returns errors for incorrect format", () => {
    const result = parsePosition("1,2");
    expect(result.errors).toContain(GRID_ERRORS.INVALID_FORMAT);
  });

  it("returns errors for out-of-range coordinates", () => {
    const result = parsePosition("5,5 NORTH");
    expect(result.errors).toContain(GRID_ERRORS.INVALID_X);
    expect(result.errors).toContain(GRID_ERRORS.INVALID_Y);
  });

  it("returns errors for invalid direction", () => {
    const result = parsePosition("1,2 UP");
    expect(result.errors).toContain(GRID_ERRORS.INVALID_DIRECTION);
  });

  it("handles multiple errors gracefully", () => {
    const result = parsePosition("6,-1 INVALID");
    expect(result.errors).toContain(GRID_ERRORS.INVALID_X);
    expect(result.errors).toContain(GRID_ERRORS.INVALID_Y);
    expect(result.errors).toContain(GRID_ERRORS.INVALID_DIRECTION);
  });
});

describe("getRotation", () => {
  it("returns 0 for NORTH", () => {
    expect(getRotation("NORTH")).toBe(0);
  });

  it("returns 90 for EAST", () => {
    expect(getRotation("EAST")).toBe(90);
  });

  it("returns 180 for SOUTH", () => {
    expect(getRotation("SOUTH")).toBe(180);
  });

  it("returns 270 for WEST", () => {
    expect(getRotation("WEST")).toBe(270);
  });

  it("returns 0 for invalid direction", () => {
    expect(getRotation("UP")).toBe(0);
    expect(getRotation(null)).toBe(0);
    expect(getRotation(undefined)).toBe(0);
  });
});
