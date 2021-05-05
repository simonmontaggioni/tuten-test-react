import {
  LOADING_BOOKINGS,
  SET_BOOKINGS,
  ERROR_BOOKINGS,
  APPLY_FILTERS,
  SET_FILTER_BY_ID,
  SET_FILTER_ID_GREATER_EQUAL_THAN,
  SET_FILTER_ID_LESS_EQUAL_THAN,
  SET_FILTER_BY_PRICE,
  SET_FILTER_PRICE_GREATER_EQUAL_THAN,
  SET_FILTER_PRICE_LESS_EQUAL_THAN,
  SET_FILTER_BY_ADDRESS,
} from "../actions/ActionTypes";
import initialStore from "../store/store";

const applyFilters = (
  bookings,
  idFilterValue = null,
  idGreaterEqualThanFilterValue = null,
  idLessEqualThanFilterValue = null,
  priceFilterValue = null,
  priceGreaterEqualThanFilterValue = null,
  priceLessEqualThanFilterValue = null,
  addressFilterValue = null
) => {
  let filteredBookings = bookings;

  console.log(
    `%c Filters applied:
    id %o
    >= id %o
    <=id %o
    price %o
    >= price %o
    <= price %o
    address %o
    %o`,
    "color: blue;",
    idFilterValue,
    idGreaterEqualThanFilterValue,
    idLessEqualThanFilterValue,
    priceFilterValue,
    priceGreaterEqualThanFilterValue,
    priceLessEqualThanFilterValue,
    addressFilterValue,
    filteredBookings
  );

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
  if (priceFilterValue !== null) {
    const filteredBookingsByPrice = filteredBookings.filter((booking) =>
      booking.bookingPrice.toString().includes(priceFilterValue)
    );
    filteredBookings = filteredBookingsByPrice;
  }
  if (priceGreaterEqualThanFilterValue !== null) {
    const filteredBookingsWithPriceGreaterEqualThan = filteredBookings.filter(
      (booking) => booking.bookingPrice >= priceGreaterEqualThanFilterValue
    );
    filteredBookings = filteredBookingsWithPriceGreaterEqualThan;
  }
  if (priceLessEqualThanFilterValue !== null) {
    const filteredBookingsWithPriceLessEqualThan = filteredBookings.filter(
      (booking) => booking.bookingPrice <= priceLessEqualThanFilterValue
    );
    filteredBookings = filteredBookingsWithPriceLessEqualThan;
  }
  if (addressFilterValue !== null) {
    const filteredBookingsByAddress = filteredBookings.filter((booking) =>
      booking.locationId.streetAddress
        .toLowerCase()
        .includes(addressFilterValue.toLowerCase())
    );
    filteredBookings = filteredBookingsByAddress;
  }

  console.log(
    `%c Filters applied:
    id %o
    >= id %o
    <=id %o
    price %o
    >= price %o
    <= price %o
    address %o
    %o`,
    "color: blue;",
    idFilterValue,
    idGreaterEqualThanFilterValue,
    idLessEqualThanFilterValue,
    priceFilterValue,
    priceGreaterEqualThanFilterValue,
    priceLessEqualThanFilterValue,
    addressFilterValue,
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
    case SET_FILTER_BY_PRICE:
      const priceFilterValue = action.payload;
      return {
        ...bookings,
        filters: { ...bookings.filters, priceFilterValue },
      };
    case SET_FILTER_PRICE_GREATER_EQUAL_THAN:
      const priceGreaterEqualThanFilterValue = action.payload;
      return {
        ...bookings,
        filters: { ...bookings.filters, priceGreaterEqualThanFilterValue },
      };
    case SET_FILTER_PRICE_LESS_EQUAL_THAN:
      const priceLessEqualThanFilterValue = action.payload;
      return {
        ...bookings,
        filters: { ...bookings.filters, priceLessEqualThanFilterValue },
      };
    case SET_FILTER_BY_ADDRESS:
      const addressFilterValue = action.payload;
      return {
        ...bookings,
        filters: { ...bookings.filters, addressFilterValue },
      };
    case APPLY_FILTERS:
      return {
        ...bookings,
        filteredBookings: applyFilters(
          bookings.data,
          bookings.filters.idFilterValue,
          bookings.filters.idGreaterEqualThanFilterValue,
          bookings.filters.idLessEqualThanFilterValue,
          bookings.filters.priceFilterValue,
          bookings.filters.priceGreaterEqualThanFilterValue,
          bookings.filters.priceLessEqualThanFilterValue,
          bookings.filters.addressFilterValue
        ),
      };
    default:
      return bookings;
  }
};

export default Bookings;
