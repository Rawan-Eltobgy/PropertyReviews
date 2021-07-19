import React from "react";
import styles from "./ReviewItem.module.css";
import AIRBNB from "../../assets/svg/AIRBNB.svg";
import thumbsUp from "../../assets/svg/thumbsUp.svg";
import thumbsDown from "../../assets/svg/thumbsDown.svg";
function ReviewItem() {
  return (
    <div>
      <div className={styles.Review}>
        <div className={styles.Review__ratingSource}>
          <div className={styles.Review__ratingBox}>
            {/**the var rating */}
            <p className={styles.Review__givenScore}>4.1</p>
            <p> / 5</p>
          </div>
          {/** Compenent conditioned for rendering LOgo */}
          <img src={AIRBNB} alt="sourceLogo" />
        </div>
        <h4 className={styles.Review__headline}>Great for nature lovers</h4>
        {/** first check if comment exists */}
        <p className={styles.Review__comment}>
          Great for nature lovers, fantastic playground for kis, lots od bikrs
          to try, amazing views of the high mountains very relaxing
        </p>
        <div className={styles.Review__opinionContainer}>
          <img src={thumbsUp} alt="thumbsUp" />
          <p className={styles.Review__comment}>
            Great for nature lovers, fantastic playground for kis, lots od bikrs
            to try, amazing views of the high mountains very relaxing
          </p>
        </div>
        <div className={styles.Review__opinionContainer}>
          <img src={thumbsDown} alt="thumbsDown" />
          <p className={styles.Review__comment}>
            Great for nature lovers, fantastic playground for kis, lots od bikrs
            to try, amazing views of the high mountains very relaxing
          </p>
        </div>
        <h5 className={styles.Review__author}>Paulina de la Mora</h5>
        <p className={styles.Review__publishedAt}>Reviewed 28 Febrauray 2020</p>
      </div>
      <hr />
    </div>
  );
}

export default ReviewItem;
