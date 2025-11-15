/**
 * Grid-related helper functions.
 */

import { GRID_ERRORS } from "../../constants/errorMessages.js";

/**
 * Valid directions for the grid object.
 */
const VALID_DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

/**
 * Parses a position string like "1,2 NORTH"
 * Returns { parsed, errors } where errors is an array of user-friendly messages.
 */
export function parsePosition(input) {
  const errors = [];

  // Validate input presence
  if (!input) {
    errors.push(GRID_ERRORS.INVALID_FORMAT);
    return { parsed: null, errors };
  }

  // Validate format
  const parts = input.trim().split(" ");
  if (parts.length !== 2) {
    errors.push(GRID_ERRORS.INVALID_FORMAT);
    return { parsed: null, errors };
  }

  const [coords, dir] = parts;
  const [xStr, yStr] = coords.split(",");
  const direction = dir?.toUpperCase();

  // Validate X
  const x = parseInt(xStr, 10);
  if (isNaN(x) || x < 0 || x > 4) {
    errors.push(GRID_ERRORS.INVALID_X);
  }

  // Validate Y
  const y = parseInt(yStr, 10);
  if (isNaN(y) || y < 0 || y > 4) {
    errors.push(GRID_ERRORS.INVALID_Y);
  }

  // Validate Direction
  if (!VALID_DIRECTIONS.includes(direction)) {
    errors.push(GRID_ERRORS.INVALID_DIRECTION);
  }

  if (errors.length > 0) {
    return { parsed: null, errors };
  }

  return { parsed: { x, y, direction }, errors: [] };
}

/**
 * Converts direction to rotation angle.
 * Useful for rotating icons.
 */
export function getRotation(direction) {
  switch (direction) {
    case "NORTH":
      return 0;
    case "EAST":
      return 90;
    case "SOUTH":
      return 180;
    case "WEST":
      return 270;
    default:
      return 0;
  }
}
