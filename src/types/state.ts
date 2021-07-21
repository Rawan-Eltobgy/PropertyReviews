import { Dispatch } from "redux";

export interface Review {
  author: string;
  channel: string;
  comment: string;
  headline: string;
  negativeFeedback?: string;
  positiveFeedback?: string;
  publishedAt: string;
  score: number;
}

export interface ReviewsState {
  reviews: Review[];
  error: string;
  isLoading: boolean;
  numOfPages?: number;
  totalNumberOfResults?: number;
}

export interface WithDispatch {
  dispatch: Dispatch;
}
