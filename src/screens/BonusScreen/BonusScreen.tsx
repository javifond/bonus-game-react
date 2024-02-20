import SpinnerWheel from "../../components/spinnerWheel/SpinnerWheel";
import WinnerMessage from "../../components/winnerMessage/WinnerMessage";
import Button from "../../components/ui/Button/Button";
import { ICreditAction } from "../../interfaces/ICreditAction";
import { CreditReducerActions } from "../../reducers/CreditsReducer/CreditReducer.actions";
import { useEffect, useState } from "react";
import { getWinner } from "./BonusScreen.utils";
import { IWeightedTableEntry } from "../../interfaces/IWeightedTableEntry";
import { weightedTable } from "./BonusScreen.constants";

import styles from "./BonusScreen.module.scss";

type BonusScreenProps = {
  dispatch: React.Dispatch<ICreditAction>;
};

const BonusScreen = ({ dispatch }: BonusScreenProps) => {
  const [winner, setWinner] = useState<IWeightedTableEntry | null>(null);
  const [showWheel, setShowWheel] = useState<boolean>(false);
  const [showWinnerMessage, setShowWinnerMessage] = useState<boolean>(false);

  useEffect(() => {
    // Enable this code for debugging purposes
    // const debugEntry: IWeightedTableEntry = {
    //   position: 1,
    //   credit: 5000,
    //   weight: 4,
    // };
    // const fakeWinner = getWinner(weightedTable, true, debugEntry);
    // setWinner(fakeWinner);
    setWinner(getWinner(weightedTable));
  }, []);

  const handleOnClick = () => {
    setShowWheel(true);
  };

  const messageShown = () => {
    if (winner) {
      dispatch({
        type: CreditReducerActions.UPDATE_CREDIT,
        payload: {
          credit: winner.credit,
        },
      });
    }
  };

  return (
    <div className={styles.bonusScreen}>
      {!showWheel && <Button text="Press to Spin" onClick={handleOnClick} />}
      {showWheel && winner && (
        <SpinnerWheel
          setShowWinnerMessage={setShowWinnerMessage}
          winnerPosition={winner.position}
        />
      )}
      {showWinnerMessage && winner && (
        <WinnerMessage messageShown={messageShown} credit={winner.credit} />
      )}
    </div>
  );
};

export default BonusScreen;
