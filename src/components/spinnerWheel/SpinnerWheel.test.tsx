import { test, expect } from "vitest";
import { calculateTotalSpinDegrees } from "./SpinnerWheel.utils"; // Adjust the path accordingly

test("calculateTotalSpinDegrees calculates total spin degrees correctly", () => {
  const NUMBER_OF_SPINS = 8;
  const FULL_SPIN_DEGREES = 360;
  const PORTION_ANGLE = 45;
  const winnerPartition = 2;

  const result = calculateTotalSpinDegrees(winnerPartition);

  const expected =
    NUMBER_OF_SPINS * FULL_SPIN_DEGREES +
    PORTION_ANGLE * (winnerPartition + 0.5); // 2992.5

  expect(result).toEqual(expected);
});
