import { useRef } from "react";
import Button from "../../components/ui/Button/Button";

import styles from "./TitleScreen.module.scss";

type TitleScreenProps = {
  onPlayClick: () => void;
};

const TitleScreen = ({ onPlayClick }: TitleScreenProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleOnAnimationEnd = () => {
    onPlayClick();
  };

  const handleOnClick = () => {
    divRef.current?.classList.add(styles.fadeOut);
  };

  return (
    <div
      ref={divRef}
      className={styles.titleScreen}
      onAnimationEnd={handleOnAnimationEnd}
    >
      <h1 className={styles.title}>Welcome to our Bonus Game &#x1f3b0;</h1>
      <Button text="Play" onClick={handleOnClick} />
    </div>
  );
};

export default TitleScreen;
