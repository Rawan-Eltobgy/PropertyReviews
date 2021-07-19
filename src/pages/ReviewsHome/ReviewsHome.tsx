import React from "react";
import styles from "./ReviewsHome.module.css";
import { Images } from "../../assets/img";
import AIRBNB from "../../assets/svg/AIRBNB.svg";
import thumbsUp from "../../assets/svg/thumbsUp.svg";
import thumbsDown from "../../assets/svg/thumbsDown.svg";

function ReviewsHome() {
  return (
    <div className={styles.Container}>
      {/* Header Background (bg img + id+ title) **/}
      <div className={styles.Container__background}>
        {/* <div className={styles.Container__darkOverlay}> */}
        <div className={styles.Container__backgroundTextView}>
          <h3 className={styles.Container__reviewID}>ID: 091021</h3>
          <h2 className={styles.Container__reviewTitle}>
            La Casa de las Flores
          </h2>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.Container__reviewsCard}>
        <div className={styles.Container__reviewsCardInner}>
          <h1>17 Reviews</h1>

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
              Great for nature lovers, fantastic playground for kis, lots od
              bikrs to try, amazing views of the high mountains very relaxing
            </p>
            <div className={styles.Review__opinionContainer}>
              <img src={thumbsUp} alt="thumbsUp" />
              <p className={styles.Review__comment}>
                Great for nature lovers, fantastic playground for kis, lots od
                bikrs to try, amazing views of the high mountains very relaxing
              </p>
            </div>
            <div className={styles.Review__opinionContainer}>
              <img src={thumbsDown} alt="thumbsDown" />
              <p className={styles.Review__comment}>
                Great for nature lovers, fantastic playground for kis, lots od
                bikrs to try, amazing views of the high mountains very relaxing
              </p>
            </div>
            <h5 className={styles.Review__author}>Paulina de la Mora</h5>
            <p className={styles.Review__publishedAt}>
              Reviewed 28 Febrauray 2020
            </p>
          </div>
          <hr />
        </div>
      </div>
      {/* Card View with reviews number and card for each review **/}

      {/* Add  filter by score, channel **/}
      {/* Add pagination at the end of the page  **/}
    </div>
  );
}

export default ReviewsHome;
