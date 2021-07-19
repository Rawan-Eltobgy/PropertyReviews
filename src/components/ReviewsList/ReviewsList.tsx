import React from "react";
import { ReviewItem } from "..";
import styles from "./ReviewsList.module.css";

function ReviewsList() {
  return (
    <div className={styles.ReviewList__container}>
      <div className={styles.ReviewList__reviewsCardInner}>
        <h1>17 Reviews</h1>
        <ReviewItem />
      </div>
    </div>
  );
}

export default ReviewsList;
