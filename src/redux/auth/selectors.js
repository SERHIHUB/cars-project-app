export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectStatus = (state) => state.auth.status;

export const selectToken = (state) => state.auth.token;

export const selectResetStatus = (state) => state.auth.resetStatus;

export const selectUserName = (state) => state.auth.user.name;

export const selectLoading = (state) => state.auth.loading;

// export const selectIsVerify = (state) => state.auth.user.verify;
