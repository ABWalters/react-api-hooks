import { getOffsetPaginator } from 'react-api-hooks';

console.log('getOffset', getOffsetPaginator);

const pageSize = 5;

/**
 * Google Books Paginator function.
 *
 * Alter the axios `config` object to fetch the next page.
 *
 * Update the `paginationState` object to keep track of page numbers internally.
 *
 * @param config {Object} - The axios config object passed to the hook.
 * @param paginationState {Object} - An object kept in state to keep track of pagination.
 */
export const paginator = getOffsetPaginator('startIndex', pageSize);

/**
 * Google Books Item Extractor
 *
 * Return a list of items to the hook, given the axios response object.
 *
 * @param response {Object} - The axios response object.
 */
export function responseToItems(response) {
  const { items } = response.data;
  const hasMore = items.length === pageSize;
  return [items, hasMore];
}
