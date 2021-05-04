import {
  LOADING_BOOKINGS,
  SET_BOOKINGS,
  ERROR_BOOKINGS,
  APPLY_FILTERS,
  SET_FILTER_BY_ID,
  SET_FILTER_ID_GREATER_EQUAL_THAN,
  SET_FILTER_ID_LESS_EQUAL_THAN,
} from "../actions/ActionTypes";
import initialStore from "../store/store";

const applyFilters = (
  bookings,
  idFilterValue = null,
  idGreaterEqualThanFilterValue = null,
  idLessEqualThanFilterValue = null,
  addressFilter
) => {
  let filteredBookings = bookings;
  if (idFilterValue !== null) {
    const filteredBookingsById = filteredBookings.filter((booking) =>
      booking.bookingId.toString().includes(idFilterValue)
    );
    filteredBookings = filteredBookingsById;
  }
  if (idGreaterEqualThanFilterValue !== null) {
    const filteredBookingsWithIdGreaterEqualThan = filteredBookings.filter(
      (booking) => booking.bookingId >= idGreaterEqualThanFilterValue
    );
    filteredBookings = filteredBookingsWithIdGreaterEqualThan;
  }
  if (idLessEqualThanFilterValue !== null) {
    const filteredBookingsWithIdLessEqualThan = filteredBookings.filter(
      (booking) => booking.bookingId <= idLessEqualThanFilterValue
    );
    filteredBookings = filteredBookingsWithIdLessEqualThan;
  }

  console.log(
    "%c filtered: %o %o %o %o",
    "font-size: 2em; background: aqua;",
    idFilterValue,
    idGreaterEqualThanFilterValue,
    idLessEqualThanFilterValue,
    filteredBookings
  );

  return filteredBookings;
};

const Bookings = (bookings = initialStore, action) => {
  switch (action.type) {
    case SET_BOOKINGS:
      return {
        ...bookings,
        isLoading: false,
        errorMessage: null,
        data: action.payload,
        filteredBookings: action.payload,
      };
    case LOADING_BOOKINGS:
      return {
        ...bookings,
        isLoading: true,
        errorMessage: null,
        data: null,
      };
    case ERROR_BOOKINGS:
      return {
        ...bookings,
        isLoading: false,
        errorMessage: action.payload,
        data: null,
      };
    case SET_FILTER_BY_ID:
      const idFilterValue = action.payload;
      return {
        ...bookings,
        filters: { ...bookings.filters, idFilterValue },
      };
    case SET_FILTER_ID_GREATER_EQUAL_THAN:
      const idGreaterEqualThanFilterValue = action.payload;
      return {
        ...bookings,
        filters: { ...bookings.filters, idGreaterEqualThanFilterValue },
      };
    case SET_FILTER_ID_LESS_EQUAL_THAN:
      const idLessEqualThanFilterValue = action.payload;
      return {
        ...bookings,
        filters: { ...bookings.filters, idLessEqualThanFilterValue },
      };
    case APPLY_FILTERS:
      return {
        ...bookings,
        filteredBookings: applyFilters(
          bookings.data,
          bookings.filters.idFilterValue,
          bookings.filters.idGreaterEqualThanFilterValue,
          bookings.filters.idLessEqualThanFilterValue
        ),
      };
    default:
      return bookings;
  }
};

export default Bookings;
