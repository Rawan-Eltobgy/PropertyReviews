import { Dispatch } from "redux";

export interface Review {
  author: string;
  channel: string;
  comment: string;
  headline: string;
  negativeFeedback?: string;
  positiveFeedback?: string;
  publishedAt: string;
}

export interface ReviewsState {
  reviews: Review[];
  error: string;
  isLoading: boolean;
}

export interface WithDispatch {
  dispatch: Dispatch;
}
