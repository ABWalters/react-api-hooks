let pageSize = 40;

export function updatePageSize(newPageSize) {
  pageSize = newPageSize;
}

/**
 * Default paginator, where the parameter `offset` is used to page through results.
 * @param config {Object} - Axios config object
 * @param paginationState {Object} - Object kept internally to keep track of pagination
 * @return output {Object[]}
 * @return output.updatedConfig {Object} - Config object including pagination changes
 * @return output.updatedPaginationState {Object} - Updated pagination state
 */
export function offsetPaginator(config, paginationState) {
  const { params = {} } = config;
  const { offset = 0 } = paginationState;
  const newOffset = offset + pageSize;
  const updatedParams = { ...params, offset: newOffset };

  const updatedConfig = { ...config, params: updatedParams };
  const updatedPaginationState = { offset: newOffset };

  return [updatedConfig, updatedPaginationState];
}

/**
 * Default `responseToItems` function. Assumes that the API response is an array of items.
 * @param response {Object} - Axios response object
 * @return output {Object}
 * @return output.items {Object[]} - Items extracted from the response
 * @return output.hasMore {boolean} - Are there more items available?
 */
export function responseToData(response) {
  const items = response.data;
  const hasMore = items.length === pageSize;
  return [items, hasMore];
}
