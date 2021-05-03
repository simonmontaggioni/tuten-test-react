import { useEffect } from "react";
import { connect } from "react-redux";
import {
  bookingsRequest,
  filterBookingsByID,
} from "../redux/actions/ActionCreators";
import BookingsGrid from "../components/BookingsGrid/BookingsGrid";

import "./Bookings.css";

const Bookings = (props) => {
  useEffect(() => {
    props.bookingsRequest();
  }, []);
  const handleIdFilterChange = (e) => {
    const id = e.target.value;
    props.filterBookingsById(id);
  };
  return (
    <div className="bookings">
      <header className="bookings-header">
        <h1 className="bookings-title">Bookings</h1>
        <button className="bookings-button">logout</button>
      </header>
      <div className="bookings-filters">
        <div className="id-filter-wrapper">
          <label htmlFor="id-filter">Buscar por ID</label>
          <input
            type="number"
            name="id-filter"
            id="id-filter"
            onChange={handleIdFilterChange}
          />
        </div>
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
  filterBookingsById: (id) => dispatch(filterBookingsByID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
