import React from "react";
import styles from "./ReviewsHome.module.css";
import { Images } from "../../assets/img";
import { ReviewsList } from "../../components";
function ReviewsHome() {
  return (
    <div className={styles.Container}>
      {/* Header Background (bg img + id+ title) **/}
      <div className={styles.Container__background}>
        <div className={styles.Container__darkOverlay}>
          <div className={styles.Container__backgroundTextView}>
            <h3 className={styles.Container__reviewID}>ID: 091021</h3>
            <h2 className={styles.Container__reviewTitle}>
              La Casa de las Flores
            </h2>
          </div>
        </div>
        <ReviewsList />
      </div>

      {/* Card View with reviews number and card for each review **/}

      {/* Add  filter by score, channel **/}
      {/* Add pagination at the end of the page  **/}
    </div>
  );
}

export default ReviewsHome;
