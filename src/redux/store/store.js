const store = {
  user: {
    email: null,
    bookings: { data: [], isLoading: false, errorMessage: null },
    token: { value: null, isLoading: false, errorMessage: null },
  },
};

export default store;
