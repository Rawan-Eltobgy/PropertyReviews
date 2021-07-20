import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewItem } from "..";
import ReactPaginate from "react-paginate";
import { fetchDataRequest } from "../../redux/actions/reviewsActions";
import { ReviewsState } from "../../types/state";
import styles from "./ReviewsList.module.css";

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
    isLoading = reviewsState?.isLoading;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        fetchDataRequest({
          limit: limit,
          page: page,
          score: score,
          channel: channel,
        })
      );
    };
    fetchData();
  }, [page, limit, dispatch]);

  function handlePageClick(selectedItem: { selected: number }) {
    setPage(selectedItem.selected);
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    // if (Number(value) < 1 || Number(value) > 5) {
    // }
    setScore(value);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    await dispatch(
      fetchDataRequest({
        limit: limit,
        page: 1,
        score: score,
        channel: channel,
      })
    );
  };

  return (
    <div className={styles.ReviewList__container}>
      <div className={styles.ReviewList__reviewsCardInner}>
        <h1>44 Reviews</h1>
        <form onSubmit={onSubmit}>
          <input
            type="number"
            // pattern="/^[+-]?((\.\d+)|(\d+(\.\d+)?))$/"
            inputMode="numeric"
            autoFocus
            autoComplete="off"
            name="rating"
            onChange={onChange}
            placeholder="Enter desired rating"
          />
          <div className={styles.control}>
            <label htmlFor="year">Year</label>
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
        {reviewsData?.map((review, index) => (
          <ReviewItem review={review} currentIndex={index} />
        ))}
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={6}
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
