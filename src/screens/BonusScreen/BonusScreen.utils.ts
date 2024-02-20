import { IWeightedTableEntry } from "../../interfaces/IWeightedTableEntry";

/**
 * Calculates the total weight from a list of weighted table entries.
 *
 * @param weightedTable
 * @returns number
 */
export const getTotalWeight = (
  weightedTable: IWeightedTableEntry[]
): number => {
  return weightedTable.reduce((acc, entry) => acc + entry.weight, 0);
};

/**
 * Selects a winner from a weighted table based on their assigned weights.
 *
 * @returns IWeightedTableEntry | null
 */
export const getWinner = (
  weightedTable: IWeightedTableEntry[],
  debugMode?: boolean,
  debugEntry?: IWeightedTableEntry
): IWeightedTableEntry | null => {
  if (debugMode && debugEntry) {
    return debugEntry;
  }
  const totalWeight = getTotalWeight(weightedTable);
  const randomWeightNumber = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  let winnerEntry = null;

  for (const entry of weightedTable) {
    cumulativeWeight += entry.weight;

    if (randomWeightNumber <= cumulativeWeight) {
      winnerEntry = entry;
      break;
    }
  }

  return winnerEntry;
};
