import { CreditReducerActions } from "./CreditReducer.actions";
import { ICreditAction } from "../../interfaces/ICreditAction";
import { ICredit } from "../../interfaces/ICredit";

export interface ICreditState extends ICredit {}

export function CreditReducer(state: ICreditState, action: ICreditAction) {
  const { type, payload } = action;

  switch (type) {
    case CreditReducerActions.UPDATE_CREDIT:
      return {
        ...state,
        credit: state.credit + payload.credit,
      };

    default:
      return state;
  }
}
