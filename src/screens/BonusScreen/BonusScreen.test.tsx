import { test, expect } from "vitest";
import { getTotalWeight, getWinner } from "./BonusScreen.utils";
import { IWeightedTableEntry } from "../../interfaces/IWeightedTableEntry";

const weightedTable: IWeightedTableEntry[] = [
  { position: 1, credit: 5000, weight: 4 },
  { position: 2, credit: 200, weight: 100 },
  { position: 3, credit: 1000, weight: 20 },
  { position: 4, credit: 400, weight: 50 },
];

test("getTotalWeight calculates the total weight correctly", () => {
  const result = getTotalWeight(weightedTable);
  const expected = 174; // Sum of all weights

  expect(result).toEqual(expected);
});

test("getWinner selects a valid winner from the weighted table", () => {
  const winner = getWinner(weightedTable);

  // Expect that the winner is not null and is an object with credit and weight properties
  expect(
    winner !== null &&
      typeof winner === "object" &&
      "position" in winner &&
      "credit" in winner &&
      "weight" in winner
  ).toBe(true);
});
