import React from "react";
import styles from "./ReviewItem.module.css";
import thumbsUp from "../../assets/svg/thumbsUp.svg";
import thumbsDown from "../../assets/svg/thumbsDown.svg";
import { Review } from "../../types/state";
import ChannelLogo from "../ChannelLogo/ChannelLogo";

type ReviewItemProps = {
  review: Review;
  currentIndex: number;
};
function ReviewItem({ review, currentIndex }: ReviewItemProps) {
  const {
    author,
    channel,
    comment,
    headline,
    negativeFeedback,
    positiveFeedback,
    publishedAt,
    score,
  } = review;
  return (
    <div>
      <div className={styles.Review}>
        <div className={styles.Review__ratingSource}>
          <div className={styles.Review__ratingBox}>
            {/**the var rating */}
            <p className={styles.Review__givenScore}>{score}</p>
            <p> / 5</p>
          </div>
          <ChannelLogo channel={channel} />
        </div>
        <h4 className={styles.Review__headline}>{headline}</h4>
        <p className={styles.Review__comment}>{comment}</p>
        {positiveFeedback && (
          <div className={styles.Review__opinionContainer}>
            <img src={thumbsUp} alt="thumbsUp" />
            <p className={styles.Review__comment}>{positiveFeedback}</p>
          </div>
        )}
        {negativeFeedback && (
          <div className={styles.Review__opinionContainer}>
            <img src={thumbsDown} alt="thumbsDown" />
            <p className={styles.Review__comment}>{negativeFeedback}</p>
          </div>
        )}
        <h5 className={styles.Review__author}>{author}</h5>
        <p className={styles.Review__publishedAt}>{publishedAt}</p>
      </div>
      <hr />
    </div>
  );
}

export default ReviewItem;
