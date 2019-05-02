import { useEffect, useState } from 'react';
import axios from 'axios';
import hash from 'hash-object';
import { offsetPaginator, responseToData } from './utils';

const { CancelToken } = axios;

/**
 * The object returned by the useInfAPI hook.
 * @typedef {Object} useInfAPIOutput
 * @property {Object[]} items - Items provided by the API
 * @property {Object|undefined} error - The axios error object is an error occurs.
 * @property {boolean} isLoading - Indicates if their is a pending API call for the **first** page of items.
 * @property {boolean} isPaging - Indicates if their is a pending API call for the **any** page of items.
 * @property {setItemsFunc} setItems - Set the items being kept in state
 * @property {function} fetchMore - Function called from the component in order to fetch the next page
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
 * @param {string} url - URL that the API call is made to.
 * @param {Object} config={} - Axios config object passed to the axios.request method.
 * @param {function} paginator= - Function used to update the config object in order to paginate
 * @param {function} responseToItems= - Function used to extract an array of items from response object.
 * @returns {useInfAPIOutput} output
 */
function useInfAPI(
  url,
  config = {},
  paginator = offsetPaginator,
  responseToItems = responseToData
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

  function callAPI(cancelToken, isLoading) {
    const activePaginationState = isLoading ? {} : paginationState; // Reset pagination when config object changes.
    const [updatedConfig, updatedPaginationState] = paginator(config, activePaginationState);

    setState({ ...state, isLoading, isPaging: true, paginationState: updatedPaginationState });
    axios(url, {
      ...updatedConfig,
      cancelToken
    })
      .then(response => {
        const [pageItems, hasMore] = responseToItems(response);
        if (pageItems instanceof []) {
          setState({
            ...state,
            items: items.concat(pageItems),
            error: undefined,
            isLoading: false,
            isPaging: false,
            hasMore
          });
        }
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled by cleanup', error.message);
        } else {
          setState({ ...state, error, isLoading: false, isPaging: false });
        }
      });
  }

  let source;
  useEffect(() => {
    source = CancelToken.source();
    callAPI(source.token, true);
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
    fetchPage: () => callAPI(source.token, false)
  };
}

export default useInfAPI;
