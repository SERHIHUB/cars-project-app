export const selectAllCars = (state) => state.cars.items;

export const selectCar = (state) => state.cars.item;

export const selectPaginationInfo = (state) => state.cars.paginationInfo;

export const selectLoading = (state) => state.cars.loading;
