import { useReducer } from "react";
import Header from "./components/header/Header";
import { ICredit } from "./interfaces/ICredit";
import { CreditReducer } from "./reducers/CreditsReducer/CreditReducer";
import { CurrentScreenProvider } from "./context/CurrentScreenContext";
import ScreensContainer from "./screens/ScreensContainer/ScreensContainer";

import "./App.module.scss";

const initialCredit: ICredit = {
  credit: 0,
};

const App = () => {
  const [{ credit }, dispatch] = useReducer(CreditReducer, initialCredit);

  return (
    <CurrentScreenProvider>
      <Header credit={credit} />
      <ScreensContainer dispatch={dispatch} />
    </CurrentScreenProvider>
  );
};

export default App;
