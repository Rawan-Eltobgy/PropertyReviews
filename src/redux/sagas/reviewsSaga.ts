import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_DATA_REQUEST } from "../store/actionTypes";
import {
  fetchDataFailure,
  fetchDataPagesSuccess,
  fetchDataSuccess,
} from "../actions";

/**
 * FetchingData
 */
interface IResponse {
  data?: any;
}

export function* fetchReviewsDataAsync(action: any) {
  const { limit, page, channel, score, allData } = action.payload;
  const params = new URLSearchParams();
  if (!allData) {
    params.append("_page", page);
    params.append("_limit", limit);
  }
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
    if (allData) {
      yield all([
        put(
          fetchDataPagesSuccess({
            numOfPages: Math.ceil(result.length / 7),
            totalNumberOfResults: result.length,
          })
        ),
      ]);
    } else {
      yield all([
        put(
          fetchDataSuccess({
            data: result,
          })
        ),
      ]);
    }
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
  yield all([takeEvery(FETCH_DATA_REQUEST, fetchReviewsDataAsync)]);
}
