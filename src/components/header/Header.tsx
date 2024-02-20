import { useEffect, useRef, useMemo } from "react";
import { useCurrentScreen } from "../../hooks/useCurrentScreen";
import { Screens } from "../../screens/Screen.constants";
import creditsUp from "../../assets/sounds/credits-rollup.wav";

import styles from "./Header.module.scss";

type HeaderProps = {
  credit: number;
};

const Header = ({ credit }: HeaderProps) => {
  const creditRef = useRef<HTMLSpanElement>(null);
  const { setCurrentScreen } = useCurrentScreen();
  const creditRollUpAudio = useMemo(() => new Audio(creditsUp), []);

  const handleOnAnimationEnd = () => {
    setCurrentScreen(Screens.Title);
  };

  useEffect(() => {
    if (credit > 0) {
      creditRollUpAudio.play();
    }
  }, [credit, creditRollUpAudio]);

  useEffect(() => {
    const ref = creditRef.current;

    if (credit > 0 && ref) {
      // Hack to trigger the animation, force a reflow.
      ref.classList.remove(styles.updateCredit);
      ref.offsetWidth;
      ref.classList.add(styles.updateCredit);
    }
  }, [credit]);

  return (
    <header className={styles.header}>
      <h1>Bonus Game &#128176;</h1>
      <div className={styles.creditContainer}>
        <span>Credits:</span>
        <span
          className={styles.credit}
          ref={creditRef}
          onAnimationEnd={handleOnAnimationEnd}
        >
          {credit}
        </span>
      </div>
    </header>
  );
};

export default Header;
