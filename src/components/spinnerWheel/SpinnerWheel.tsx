import {
  calculateTotalSpinDegrees,
  getAnimationKeyFrames,
  insertCSSRules,
} from "./SpinnerWheel.utils";
import { weightedTable } from "../../screens/BonusScreen/BonusScreen.constants";
import { SPIN_ANIMATION_NAME } from "./SpinnerWheel.constants";
import { useEffect } from "react";

import styles from "./SpinnerWheel.module.scss";

type SpinnerWheelProps = {
  setShowWinnerMessage: React.Dispatch<React.SetStateAction<boolean>>;
  winnerPosition: number;
};

const SpinnerWheel = ({
  setShowWinnerMessage,
  winnerPosition,
}: SpinnerWheelProps) => {
  const totalSpinDegrees = calculateTotalSpinDegrees(winnerPosition);
  const animationNameStyle = {
    animationName: SPIN_ANIMATION_NAME,
  };

  const handleOnAnimationEnd = () => {
    setShowWinnerMessage(true);
  };

  useEffect(() => {
    const keyFrames = getAnimationKeyFrames(
      totalSpinDegrees,
      SPIN_ANIMATION_NAME
    );

    insertCSSRules(keyFrames);
  }, [totalSpinDegrees]);

  return (
    <div className={styles.wheelWrapper}>
      {/* Pointer */}
      <div className={styles.pointer} />

      {/* Wheel */}
      <div
        onAnimationEnd={handleOnAnimationEnd}
        className={`${styles.wheel} ${styles.rotateWheel}`}
        style={animationNameStyle}
      >
        {/* Dividers */}
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />

        {/* Portions */}
        <div className={styles.creditWrapper}>
          {weightedTable.map(({ position, credit }, i) => (
            <div key={`${i}_${position}`} className={styles.credit}>
              {credit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpinnerWheel;
