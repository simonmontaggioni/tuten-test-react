const store = {
  email: null,
  bookings: {
    data: [],
    isLoading: false,
    errorMessage: null,
    filteredBookings: [],
  },
  token: {
    value: null,
    isLoading: false,
    errorMessage: null,
  },
};

export default store;
