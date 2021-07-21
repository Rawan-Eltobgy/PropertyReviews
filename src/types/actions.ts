import { Action } from "redux";
import { Review } from "./state";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_PAGES_SUCCESS,
} from "../redux/store/actionTypes";

export interface FetchDataRequestPayload {
  page: number;
  limit: number;
  score?: number;
  channel?: string;
  allData?: boolean;
}

export interface FetchDataSuccessPayload {
  data: Review[];
}

export interface FetchDataPagesSuccessPayload {
  numOfPages: number;
  totalNumberOfResults: number;
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

export interface FetchDataPagesSuccess extends Action {
  type: typeof FETCH_DATA_PAGES_SUCCESS;
  payload: FetchDataPagesSuccessPayload;
}

export interface FetchDataFailure extends Action {
  type: typeof FETCH_DATA_FAILURE;
  payload: FetchDataFailurePayload;
}

export type ReviewsActions =
  | FetchDataSuccess
  | FetchDataPagesSuccess
  | FetchDataFailure
  | FetchDataRequest;
