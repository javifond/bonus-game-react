import {
  FULL_SPIN_DEGREES,
  PORTION_ANGLE,
  NUMBER_OF_SPINS,
} from "./SpinnerWheel.constants";

/**
 * Insert CSS rules into the first stylesheet.
 *
 * @param rules
 */
export const insertCSSRules = (rules: string) => {
  const styleSheet = document.styleSheets[0];

  styleSheet?.insertRule(rules, styleSheet.cssRules.length);
};

/**
 * Calculates de total spin degrees value, based on the given
 * partition.
 *
 * @param winnerPosition
 * @returns
 */
export const calculateTotalSpinDegrees = (winnerPosition: number) => {
  return (
    NUMBER_OF_SPINS * FULL_SPIN_DEGREES + PORTION_ANGLE * (winnerPosition + 0.5)
  );
};

/**
 * Return the animation keyframes definition.
 *
 * @param totalSpinDegrees
 * @param animationName
 * @returns
 */
export const getAnimationKeyFrames = (
  totalSpinDegrees: number,
  animationName: string
) => `
@keyframes ${animationName} {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(${totalSpinDegrees}deg);
  }
}
`;
