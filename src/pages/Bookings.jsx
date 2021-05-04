import { useEffect } from "react";
import { connect } from "react-redux";
import {
  applyFilters,
  bookingsRequest,
  setFilterByID,
  setfilterIdGreaterEqualThan,
  setfilterIdLessEqualThan,
} from "../redux/actions/ActionCreators";
import BookingsGrid from "../components/BookingsGrid/BookingsGrid";
import Filters from "../components/Filters/Filters";

import "./Bookings.css";

const Bookings = (props) => {
  useEffect(() => {
    props.bookingsRequest();
  }, []);
  const handleIdFiltersChange = (idFilterValue) => {
    props.setFilterById(idFilterValue);
    props.applyFilters();
  };
  const handleGreaterEqualThanFiltersChange = (idGreaterThanValue) => {
    props.setfilterIdGreaterEqualThan(idGreaterThanValue);
    props.applyFilters();
  };
  const handleLessEqualThanFiltersChange = (idLessThanValue) => {
    props.setfilterIdLessEqualThan(idLessThanValue);
    props.applyFilters();
  };

  return (
    <div className="bookings">
      <header className="bookings-header">
        <h1 className="bookings-title">Bookings</h1>
        <button className="bookings-button">logout</button>
      </header>
      <div className="bookings-filters">
        <Filters
          handleIdFiltersChange={handleIdFiltersChange}
          handleGreaterEqualThanFiltersChange={
            handleGreaterEqualThanFiltersChange
          }
          handleLessEqualThanFiltersChange={handleLessEqualThanFiltersChange}
          filtersValues={props.bookings.filters}
        ></Filters>
      </div>
      <div className="bookings-grid-wrapper">
        {props.bookings.isLoading ? (
          <div className="notification">Loading ...</div>
        ) : (
          <BookingsGrid data={props.bookings.filteredBookings} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    bookings: state.bookings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  bookingsRequest: () => dispatch(bookingsRequest()),
  applyFilters: () => dispatch(applyFilters()),
  setFilterById: (id) => dispatch(setFilterByID(id)),
  setfilterIdGreaterEqualThan: (idGreaterThanValue) =>
    dispatch(setfilterIdGreaterEqualThan(idGreaterThanValue)),
  setfilterIdLessEqualThan: (idLessThanValue) =>
    dispatch(setfilterIdLessEqualThan(idLessThanValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
