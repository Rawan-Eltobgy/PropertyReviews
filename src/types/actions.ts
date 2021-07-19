import { Action } from "redux";
import { Review } from "./state";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../redux/store/actionTypes";

export interface FetchDataRequestPayload {
  page: number;
  limit: number;
  filter?: string;
}

export interface FetchDataSuccessPayload {
  data: Review[];
}

export interface FetchDataFailurePayload {
  error: Error;
}

export interface FetchDataRequest extends Action {
  type: typeof FETCH_DATA_REQUEST;
  payload: FetchDataRequestPayload;
}

export interface FetchDataSuccess extends Action {
  type: typeof FETCH_DATA_SUCCESS;
  payload: FetchDataSuccessPayload;
}

export interface FetchDataFailure extends Action {
  type: typeof FETCH_DATA_FAILURE;
  payload: FetchDataFailurePayload;
}

export type ReviewsActions =
  | FetchDataSuccess
  | FetchDataFailure
  | FetchDataRequest;
