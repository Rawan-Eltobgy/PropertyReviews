import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewItem } from "..";
import ReactPaginate from "react-paginate";
import { fetchDataRequest } from "../../redux/actions/reviewsActions";
import { ReviewsState } from "../../types/state";
import styles from "./ReviewsList.module.css";
import Loader from "react-loader-spinner";

function ReviewsList() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const [channel, setChannel] = useState("");
  const [score, setScore] = useState(0);
  const [inputError, setInputError] = useState("");
  const dispatch = useDispatch();

  const channelsData = [
    { label: "Airbnb", value: "AIRBNB" },
    { label: "Booking", value: "BOOKINGCOM" },
    { label: "Holidu", value: "HOLIDU" },
    { label: "Any", value: "" },
  ];
  const reviewsState: ReviewsState = useSelector(
      (state: any) => state.reviewsReducer
    ),
    reviewsData = reviewsState?.reviews,
    error = reviewsState?.error,
    isLoading = reviewsState?.isLoading,
    numOfPages = reviewsState?.numOfPages,
    totalNumberOfResults = reviewsState?.totalNumberOfResults;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        fetchDataRequest({
          limit: limit,
          page: page,
          score: score,
          channel: channel,
          allData: true,
        })
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        fetchDataRequest({
          limit: limit,
          page: page,
          score: score,
          channel: channel,
          allData: false,
        })
      );
    };
    fetchData();
  }, [page, limit, dispatch]);

  function handlePageClick(selectedItem: { selected: number }) {
    setPage(selectedItem.selected + 1);
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setScore(value);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setPage(1);
    await dispatch(
      fetchDataRequest({
        limit: limit,
        page: page,
        score: score,
        channel: channel,
        allData: true,
      })
    );
    await dispatch(
      fetchDataRequest({
        limit: limit,
        page: page,
        score: score,
        channel: channel,
        allData: false,
      })
    );
  };
  return (
    <div className={styles.ReviewList__container}>
      <div className={styles.ReviewList__reviewsCardInner}>
        <div className={styles.ReviewList__header}>
          <h1>{totalNumberOfResults} Reviews</h1>
          <div className={styles.ReviewList__reviewsFilterContainer}>
            <form
              onSubmit={onSubmit}
              className={styles.ReviewList__reviewsFilters}
            >
              <label
                htmlFor="rating"
                className={styles.ReviewList__filterLabel}
              >
                Desired Rating:
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                autoFocus
                autoComplete="off"
                name="rating"
                onChange={onChange}
              />
              <div className={styles.ReviewList__filterChannel}>
                <label
                  htmlFor="channel"
                  className={styles.ReviewList__filterLabel}
                >
                  Channel:
                </label>
                <select
                  disabled={isLoading}
                  value={channel}
                  onChange={(e) => setChannel(e.currentTarget.value)}
                >
                  {channelsData.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" value="Submit">
                Search
              </button>
            </form>
          </div>
        </div>
        {reviewsData.length > 0 ? (
          reviewsData?.map((review, index) => (
            <ReviewItem review={review} currentIndex={index} />
          ))
        ) : error ? (
          <div className={styles.ReviewList__loader}>
            <h4>{error}</h4>
          </div>
        ) : (
          <div className={styles.ReviewList__loader}>
            <h3>No reviews found!</h3>
          </div>
        )}
        {isLoading && (
          <div className={styles.ReviewList__loader}>
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </div>
        )}
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={numOfPages ?? 6}
          forcePage={page - 1}
          onPageChange={handlePageClick}
          containerClassName={styles.Pagination}
          previousLinkClassName={styles.Pagination__link}
          nextLinkClassName={styles.Pagination__link}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          disabledClassName={styles.Pagination__link_disabled}
          activeClassName={styles.Pagination__link_active}
        />
      </div>
    </div>
  );
}

export default ReviewsList;
