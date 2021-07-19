import { ReviewsActions } from "../../types/actions";
import { ReviewsState } from "../../types/state";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../store/actionTypes";

export const reviewsState: ReviewsState = {
  reviews: [],
  error: "",
  isLoading: false,
};

export default (state = reviewsState, action: ReviewsActions) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      const newData =
        state.reviews.length === 0
          ? action.payload.data
          : [...state.reviews, ...action.payload.data];
      return {
        ...state,
        reviews: newData,
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
