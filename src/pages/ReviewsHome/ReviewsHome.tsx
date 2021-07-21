import React from "react";
import styles from "./ReviewsHome.module.css";
import { ReviewsList } from "../../components";
function ReviewsHome() {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__background}>
        <div className={styles.Container__darkOverlay}>
          <div className={styles.Container__backgroundTextView}>
            <h4 className={styles.Container__reviewID}>ID: 091021</h4>
            <h1 className={styles.Container__reviewTitle}>
              La Casa de las Flores
            </h1>
          </div>
        </div>
        <ReviewsList />
      </div>
    </div>
  );
}

export default ReviewsHome;
