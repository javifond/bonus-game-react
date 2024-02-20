import { useContext } from "react";
import { CurrentScreenContext } from "../context/CurrentScreenContext";

export const useCurrentScreen = () => {
  const context = useContext(CurrentScreenContext);

  if (!context) {
    throw new Error(
      "useCurrentScreen must be used within a CurrentScreenProvider"
    );
  }

  return context;
};
