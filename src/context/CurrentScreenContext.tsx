import { createContext, useState, ReactElement } from "react";
import { Screens } from "../screens/Screen.constants";

type CurrentScreenContextProps = {
  currentScreen: Screens;
  setCurrentScreen: React.Dispatch<React.SetStateAction<Screens>>;
};

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const CurrentScreenContext = createContext<
  CurrentScreenContextProps | undefined
>(undefined);

export const CurrentScreenProvider = ({ children }: ChildrenType) => {
  const [currentScreen, setCurrentScreen] = useState<Screens>(Screens.Title);

  const contextValue: CurrentScreenContextProps = {
    currentScreen,
    setCurrentScreen,
  };

  return (
    <CurrentScreenContext.Provider value={contextValue}>
      {children}
    </CurrentScreenContext.Provider>
  );
};
