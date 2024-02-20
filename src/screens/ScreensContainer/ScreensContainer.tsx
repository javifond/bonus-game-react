import { ICreditAction } from "../../interfaces/ICreditAction";
import { useCurrentScreen } from "../../hooks/useCurrentScreen";
import { Screens } from "../Screen.constants";
import TitleScreen from "../TitleScreen/TitleScreen";
import BonusScreen from "../BonusScreen/BonusScreen";

import styles from "./ScreensContainer.module.scss";

type ScreensContainerProps = {
  dispatch: React.Dispatch<ICreditAction>;
};
const ScreensContainer = ({ dispatch }: ScreensContainerProps) => {
  const { currentScreen, setCurrentScreen } = useCurrentScreen();

  const handleOnPlayClick = () => {
    setCurrentScreen(Screens.Bonus);
  };

  return (
    <main className={styles.gameContainer}>
      {currentScreen === Screens.Title && (
        <TitleScreen onPlayClick={handleOnPlayClick} />
      )}
      {currentScreen === Screens.Bonus && <BonusScreen dispatch={dispatch} />}
    </main>
  );
};

export default ScreensContainer;
