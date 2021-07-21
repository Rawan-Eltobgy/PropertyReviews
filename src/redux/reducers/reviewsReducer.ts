import { ReviewsActions } from "../../types/actions";
import { ReviewsState } from "../../types/state";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_PAGES_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../store/actionTypes";

export const reviewsState: ReviewsState = {
  reviews: [],
  error: "",
  isLoading: false,
  numOfPages: 0,
  totalNumberOfResults: 0,
};

export default (state = reviewsState, action: ReviewsActions) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        reviews: action.payload.data,
        isLoading: false,
        error: "",
      };
    case FETCH_DATA_PAGES_SUCCESS:
      return {
        ...state,
        numOfPages: action.payload.numOfPages,
        totalNumberOfResults: action.payload.totalNumberOfResults,
        isLoading: false,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
