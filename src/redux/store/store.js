const store = {
  bookings: {
    data: [],
    isLoading: false,
    errorMessage: null,
    filteredBookings: [],
    filters: { idFilterValue: "", idGreaterEqualThanFilterValue: 0 },
  },
  token: {
    value: null,
    isLoading: false,
    errorMessage: null,
  },
};

export default store;
