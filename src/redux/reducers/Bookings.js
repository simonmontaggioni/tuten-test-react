import {
  LOADING_BOOKINGS,
  SET_BOOKINGS,
  ERROR_BOOKINGS,
  FILTER_BOOKINGS_BY_ID,
} from "../actions/ActionTypes";
import initialStore from "../store/store";

const Bookings = (bookings = initialStore, action) => {
  switch (action.type) {
    case SET_BOOKINGS:
      return {
        ...bookings,
        isLoading: false,
        errorMessage: null,
        data: action.payload,
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
    case FILTER_BOOKINGS_BY_ID:
      const filteredBookingsById = bookings.data.filter((booking) =>
        booking.bookingId.toString().includes(action.payload)
      );
      return {
        ...bookings,
        filteredBookings: filteredBookingsById,
      };
    default:
      return bookings;
  }
};

export default Bookings;
