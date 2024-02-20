import { CreditReducerActions } from "../reducers/CreditsReducer/CreditReducer.actions";
import { ICredit } from "./ICredit";

export interface ICreditAction {
  type: CreditReducerActions;
  payload: ICredit;
}
