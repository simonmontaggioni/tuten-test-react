import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  setUserEmail,
  logoutRequest,
  applyFilters,
  bookingsRequest,
  setFilterByID,
  setFilterByAddress,
  setfilterIdGreaterEqualThan,
  setfilterIdLessEqualThan,
  setFilterByPrice,
  setfilterPriceGreaterEqualThan,
  setfilterPriceLessEqualThan,
} from "../redux/actions/ActionCreators";
import BookingsGrid from "../components/BookingsGrid/BookingsGrid";
import Filters from "../components/Filters/Filters";

import "./Bookings.css";

const Bookings = (props) => {
  const handleEmailChange = (userEmail) => {
    props.setUserEmail(userEmail);
  };

  const handleEmailSearch = () => {
    console.log("%c Email: %o", "font-size: 2em", props.email.value);
    props.bookingsRequest(props.token.value, props.email.value);
    // props.applyFilters();
  };

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

  const handlePriceFiltersChange = (priceFilterValue) => {
    props.setFilterByPrice(priceFilterValue);
    props.applyFilters();
  };

  const handlePriceGreaterEqualThanFiltersChange = (priceGreaterThanValue) => {
    props.setfilterPriceGreaterEqualThan(priceGreaterThanValue);
    props.applyFilters();
  };

  const handlePriceLessEqualThanFiltersChange = (priceLessThanValue) => {
    props.setfilterPriceLessEqualThan(priceLessThanValue);
    props.applyFilters();
  };

  const handleAddressFiltersChange = (AddressFilterValue) => {
    props.setFilterByAddress(AddressFilterValue);
    props.applyFilters();
  };

  const logoutRequest = () => {
    props.logoutRequest();
  };

  if (props.token.value === null) {
    return <Redirect to="/" />;
  }

  return (
    <div className="bookings">
      <header className="bookings-header">
        <h1 className="bookings-title">Bookings</h1>
        <button className="bookings-logout-button" onClick={logoutRequest}>
          Logout
        </button>
      </header>
      <div className="bookings-filters">
        <Filters
          handleAddressFiltersChange={handleAddressFiltersChange}
          handleEmailChange={handleEmailChange}
          handleEmailSearch={handleEmailSearch}
          handleIdFiltersChange={handleIdFiltersChange}
          handleGreaterEqualThanFiltersChange={
            handleGreaterEqualThanFiltersChange
          }
          handleLessEqualThanFiltersChange={handleLessEqualThanFiltersChange}
          handlePriceFiltersChange={handlePriceFiltersChange}
          handlePriceGreaterEqualThanFiltersChange={
            handlePriceGreaterEqualThanFiltersChange
          }
          handlePriceLessEqualThanFiltersChange={
            handlePriceLessEqualThanFiltersChange
          }
          filtersValues={props.bookings.filters}
        ></Filters>
      </div>
      <div className="bookings-grid-wrapper">
        {/* {props.bookings.isLoading ? (
          <div className="notification">Loading ...</div>
        ) : ( */}
        <BookingsGrid
          data={props.bookings.filteredBookings}
          isLoading={props.bookings.isLoading}
        />
        {/* )} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
    token: state.token,
    bookings: state.bookings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserEmail: (userEmail) => dispatch(setUserEmail(userEmail)),

  logoutRequest: () => dispatch(logoutRequest()),

  bookingsRequest: (token, emailValue) =>
    dispatch(bookingsRequest(token, emailValue)),

  applyFilters: () => dispatch(applyFilters()),

  setFilterById: (id) => dispatch(setFilterByID(id)),

  setfilterIdGreaterEqualThan: (idGreaterThanValue) =>
    dispatch(setfilterIdGreaterEqualThan(idGreaterThanValue)),

  setfilterIdLessEqualThan: (idLessThanValue) =>
    dispatch(setfilterIdLessEqualThan(idLessThanValue)),
  setFilterByPrice: (id) => dispatch(setFilterByPrice(id)),

  setfilterPriceGreaterEqualThan: (priceGreaterThanValue) =>
    dispatch(setfilterPriceGreaterEqualThan(priceGreaterThanValue)),

  setfilterPriceLessEqualThan: (priceLessThanValue) =>
    dispatch(setfilterPriceLessEqualThan(priceLessThanValue)),

  setFilterByAddress: (address) => dispatch(setFilterByAddress(address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
