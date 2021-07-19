import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewItem } from "..";
import ReactPaginate from "react-paginate";
import { fetchDataRequest } from "../../redux/actions/reviewsActions";
import { ReviewsState } from "../../types/state";
import styles from "./ReviewsList.module.css";

function ReviewsList() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [channel, setChannel] = useState("");
  const [score, setScore] = useState(0);

  const dispatch = useDispatch();

  const reviewsState: ReviewsState = useSelector(
      (state: any) => state.reviewsReducer
    ),
    reviewsData = reviewsState?.reviews,
    isLoading = reviewsState?.isLoading;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchDataRequest({ limit: limit, page: page }));
    };
    fetchData();
  }, [page, limit, dispatch]);

  useEffect(() => {
    setPage(1);
    const delayDebounceFn = setTimeout(() => {
      dispatch(fetchDataRequest({ limit: limit, page: 1, score: score }));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, limit, score]);

  function handlePageClick(selectedItem: { selected: number }) {
    console.log("selectedPage", selectedItem.selected);
    setPage(selectedItem.selected);
  }

  console.log("reviewsData hiii: ", reviewsState);
  return (
    <div className={styles.ReviewList__container}>
      <div className={styles.ReviewList__reviewsCardInner}>
        <h1>17 Reviews</h1>
        {reviewsData?.map((review, index) => (
          <ReviewItem review={review} currentIndex={index} />
        ))}
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={14}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.pagination__link}
          nextLinkClassName={styles.pagination__link}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          disabledClassName={styles.pagination__link_disabled}
          activeClassName={styles.pagination__link_active}
        />
      </div>
    </div>
  );
}

export default ReviewsList;
