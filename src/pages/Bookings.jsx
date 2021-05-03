import { useEffect } from "react";
import { connect } from "react-redux";
import { bookingsRequest } from "../redux/actions/ActionCreators";
import BookingsGrid from "../components/BookingsGrid/BookingsGrid";

import "./Bookings.css";

const Bookings = (props) => {
  useEffect(() => {
    props.bookingsRequest();
  }, []);

  return (
    <div className="bookings">
      <header className="bookings-header">
        <h1 className="bookings-title">Bookings</h1>
        <button className="bookings-button">logout</button>
      </header>
      <div className="bookings-filters">Filters</div>
      <div className="bookings-grid-wrapper">
        {props.bookings.isLoading ? (
          <div className="notification">Loading ...</div>
        ) : (
          <BookingsGrid data={props.bookings.data} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
