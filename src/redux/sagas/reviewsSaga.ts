import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../store/actionTypes";
import { fetchDataFailure, fetchDataSuccess } from "../actions";

/**
 * FetchingData
 */
interface IResponse {
  data?: any;
}

export function* fetchReviewsDataAsync(action: any) {
  const { limit, page, channel, score } = action.payload;
  const params = new URLSearchParams({ _page: page, _limit: limit });
  if (channel && channel.length) {
    params.append("channel", channel);
  }
  if (score && score >= 0 && score <= 5) {
    params.append("score", score);
  }
  const query = params.toString();
  let url = `${process.env.REACT_APP_API_URL}?${query}`;
  try {
    const response: IResponse = yield call(axios.get, url);
    let result = response.data;
    yield all([
      put(
        fetchDataSuccess({
          data: result,
        })
      ),
    ]);
  } catch (e) {
    yield put(
      fetchDataFailure({
        error: e,
      })
    );
  }
}

/**
 * Reviews Sagas
 */
//for firing an async request.
//But, if takeLatest fire off,
//any async task that running before will be canceled.
export default function* root() {
  yield all([takeLatest(FETCH_DATA_REQUEST, fetchReviewsDataAsync)]);
}
