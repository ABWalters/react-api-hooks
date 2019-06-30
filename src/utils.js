/**
 * Uses offset pagination strategy to page through results in an infite scroller.
 *
 * Change the 'offsetParamName' to customize the paginator to your API.
 *
 * E.g. you may need to use `offsetParamName='skip'`, `offsetParamName='start'`
 *
 * @param {Object} config - Axios config object
 * @param {Object} paginationState - Object kept internally to keep track of pagination
 * @param {string} offsetParamName - Param name used to send offset value to the API
 * @param {number} pageSize - Increment size for offset.
 * @return {Object[]} output
 * @return {Object} output.updatedConfig - Config object including pagination changes
 * @return {Object} output.updatedPaginationState - Updated pagination state
 */
export function offsetPaginator(config, paginationState, offsetParamName, pageSize) {
  const { params = {} } = config;
  const { offset } = paginationState;
  const newOffset = offset !== undefined ? offset + pageSize : 0;
  const updatedParams = { ...params, [offsetParamName]: newOffset };

  const updatedConfig = { ...config, params: updatedParams };
  const updatedPaginationState = { offset: newOffset };

  return [updatedConfig, updatedPaginationState];
}

/**
 * Generate your own offset paginator with custom offset param names and page sizes.
 * @param offsetParamName
 * @param pageSize
 * @return {function} paginatorFunc
 */
export function getOffsetPaginator(offsetParamName, pageSize) {
  return (config, paginationState) =>
    offsetPaginator(config, paginationState, offsetParamName, pageSize);
}

/**
 * Default `responseToItems` function. Assumes that the API response is an array of items.
 * @param response {Object} - Axios response object
 * @return output {Object}
 * @return output.items {Object[]} - Items extracted from the response
 * @return output.hasMore {boolean} - Are there more items available?
 */
export function responseToData(response, pageSize) {
  const items = response.data;
  const hasMore = items.length === pageSize;
  return [items, hasMore];
}
/**
 * Generate a response to data function using a custom page size.
 *
 * If results.length === pageSize then it is assumed that there are more pages available.
 * @param pageSize
 * @return {function} responseToDataFunc
 */
export function getResponseToData(pageSize) {
  return response => {
    return responseToData(response, pageSize);
  };
}
