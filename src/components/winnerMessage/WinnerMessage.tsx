import styles from "./WinnerMessage.module.scss";

type WinnerMessageProps = {
  messageShown: () => void;
  credit: number;
};
const WinnerMessage = ({ messageShown, credit }: WinnerMessageProps) => {
  const handleOnAnimationEnd = () => {
    messageShown();
  };

  return (
    <div
      className={`${styles.message} ${styles.animateMessage}`}
      onAnimationEnd={handleOnAnimationEnd}
    >
      You won <span className={styles.credit}>{credit}</span> credits, Yay!
    </div>
  );
};

export default WinnerMessage;
