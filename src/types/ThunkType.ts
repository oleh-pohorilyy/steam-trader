import { ThunkAction } from "redux-thunk";
import { ActionType } from "./ActionType";
import { AppStateType } from "./AppStateType";

export type ThunkType = ThunkAction<Promise<void>, AppStateType, {}, ActionType>