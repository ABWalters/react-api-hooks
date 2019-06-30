import { useEffect, useState } from 'react';
import axios from 'axios';
import hash from 'hash-object';
import { getOffsetPaginator, getResponseToData } from './utils';

const { CancelToken } = axios;

const defaultPaginator = getOffsetPaginator('offset', 40);
const defaultResponseToData = getResponseToData(40);

/**
 * Paginator function used to alter the axios config object, in order to fetch the next page.
 * @typedef {function} paginatorFunc
 * @param config {Object} - Axios config object
 * @param paginationState {Object} - Object kept internally to keep track of pagination
 * @return output {Object[]} - Return tuple \[updatedConfig: Object, updatedPaginationState: Object\]
 */

/**
 * Function used to extract items from the API response.
 * @typedef {function} responseToItemsFunc
 * @param response {Object} - Axios response object
 * @return output {Object} - Return tuple \[items: Object[], hasMore: boolean\]
 */

/**
 * The object returned by the useInfAPI hook.
 * @typedef {Object} useInfAPIOutput
 * @property {Object[]} items - Items provided by the API
 * @property {Object|undefined} error - The axios error object is an error occurs.
 * @property {boolean} isLoading - Indicates if their is a pending API call for the **first** page of items.
 * @property {boolean} isPaging - Indicates if their is a pending API call for the **any** page of items.
 * @property {setItemsFunc} setItems - Set the items being kept in state
 * @property {responseToItemsFunc} fetchPage - Function called from the component in order to fetch the next page
 */

/**
 * `setItems` property of `useInfAPIOutput`
 * @typedef {function} setItemsFunc
 * @param {Object[]} newItems - New items array that overwrites current data.
 */

/**
 * React hook used by an infinite scrolling component to make API calls using axios.
 *
 * Allows you to pass an [axios config object](https://github.com/axios/axios#request-config), for complete control of the request being sent.
 *
 * By default it will paginate using a query param `offset`, and assumes that the API returns an array of items.
 *
 * If this is not appropriate for your API, then you will need to provide your own `paginator` and `responseToItems` functions.
 *
 * @param {string} url - URL that the API call is made to.
 * @param {Object} config={} - Axios config object passed to the axios.request method.
 * @param {paginatorFunc} paginator=offsetPaginator - Function used to update the config object in order to paginate
 * @param {function} responseToItems=responseToData - Function used to extract an array of items from response object.
 * @returns {useInfAPIOutput} output
 */
function useInfAPI(
  url,
  config = {},
  paginator = defaultPaginator,
  responseToItems = defaultResponseToData
) {
  const [state, setState] = useState({
    items: [],
    paginationState: {},
    error: undefined,
    isLoading: true,
    isPaging: true,
    hasMore: false
  });

  const configHash = hash(config);

  const { items, paginationState } = state;

  const source = CancelToken.source();

  function callAPI(isLoading) {
    const activePaginationState = isLoading ? {} : paginationState; // Reset pagination when config object changes.
    const [updatedConfig, updatedPaginationState] = paginator(config, activePaginationState);

    setState({
      ...state,
      isLoading,
      isPaging: true,
      paginationState: updatedPaginationState,
      items: isLoading ? [] : items // Clear items when config changes
    });
    axios(url, {
      ...updatedConfig,
      cancelToken: source.token
    })
      .then(response => {
        const [pageItems, hasMore] = responseToItems(response);
        if (typeof pageItems === typeof []) {
          setState({
            ...state,
            items: isLoading ? pageItems : items.concat(pageItems), // If the config object changed, the reset items
            error: undefined,
            isLoading: false,
            isPaging: false,
            hasMore,
            paginationState: updatedPaginationState
          });
        } else {
          console.log("Warning: responseToItems didn't return an array.");
        }
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled by cleanup: ', error.message);
        } else {
          setState({ ...state, error, isLoading: false, isPaging: false });
        }
      });
  }

  useEffect(() => {
    callAPI(true);
    return () => {
      source.cancel('useEffect cleanup.');
    };
  }, [url, configHash]);

  const { error, isPaging, isLoading, hasMore } = state;
  return {
    items,
    error,
    isPaging,
    isLoading,
    hasMore,
    setItems: newItems => setState({ ...state, items: newItems }),
    fetchPage: () => callAPI(false)
  };
}

export default useInfAPI;
