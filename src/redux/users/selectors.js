export const selectName = (state) => state.users.user.name;

export const selectCurrentUser = (state) => state.users.user;

export const selectUsers = (state) => state.users.items;

export const selectLoading = (state) => state.users.loading;
