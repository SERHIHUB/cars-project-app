export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectStatus = (state) => state.auth.status;

export const selectToken = (state) => state.auth.token;

export const selectResetStatus = (state) => state.auth.resetStatus;
