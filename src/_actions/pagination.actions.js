import { paginationConstants } from "../_constants/";

function setPage(page) {
  return { type: paginationConstants.SET_PAGINATION, page: page };
}

function setLimit(limit) {
  return { type: paginationConstants.SET_LIMIT, limit: limit };
}

function setDefault() {
  return { type: paginationConstants.SET_DEFAULT };
}

const selectPage = (state) => state.pagination.page;

const selectLimit = (state) => state.pagination.limit;

export const paginationActions = {
  setPage,
  setLimit,
  setDefault,
  selectPage,
  selectLimit,
};
