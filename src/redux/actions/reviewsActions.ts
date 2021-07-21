import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_PAGES_SUCCESS,
} from "../store/actionTypes";
import {
  FetchDataFailure,
  FetchDataSuccess,
  FetchDataPagesSuccess,
  FetchDataRequest,
  FetchDataRequestPayload,
  FetchDataFailurePayload,
  FetchDataSuccessPayload,
  FetchDataPagesSuccessPayload,
} from "../../types/actions";

export const fetchDataRequest = (
  payload: FetchDataRequestPayload
): FetchDataRequest => ({
  type: FETCH_DATA_REQUEST,
  payload,
});

export const fetchDataSuccess = (
  payload: FetchDataSuccessPayload
): FetchDataSuccess => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataPagesSuccess = (
  payload: FetchDataPagesSuccessPayload
): FetchDataPagesSuccess => ({
  type: FETCH_DATA_PAGES_SUCCESS,
  payload,
});

export const fetchDataFailure = (
  payload: FetchDataFailurePayload
): FetchDataFailure => ({
  type: FETCH_DATA_FAILURE,
  payload,
});
