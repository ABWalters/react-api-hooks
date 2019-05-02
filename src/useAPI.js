import { useEffect, useState } from 'react';
import axios from 'axios';
import hash from 'hash-object';

const { CancelToken } = axios;

/**
 * The object returned by the useAPI hook.
 * @typedef {Object} useAPIOutput
 * @property {Object|undefined} data - The data attribute from the axios response.
 * @property {Object|undefined} response - The axios response.
 * @property {Object|undefined} error - The axios error object if an error occurs.
 * @property {boolean} isLoading - Indicates if their is a pending API call.
 * @property {setDataFunc} setData - Set the response data object.
 */

/**
 * `setData` property of `useAPIOutput`
 * @typedef {function} setDataFunc
 * @param {Object[]} newData - New data array that overwrites current data.
 */

/**
 * React hook used to make a an API call using axios.
 *
 * Allows you to pass an [axios config object](https://github.com/axios/axios#request-config), for complete control of the request being sent.
 *
 * @param {string} url - URL that the API call is made to.
 * @param {Object} config={} - Axios config object passed to the axios.request method.
 * @returns {useAPIOutput} output
 */
function useAPI(url, config = {}) {
  const [state, setState] = useState({
    response: undefined,
    error: undefined,
    isLoading: true
  });

  const configHash = hash(config);

  useEffect(() => {
    setState({ ...state, isLoading: true });

    const source = CancelToken.source();
    axios(url, {
      ...config,
      cancelToken: source.token
    })
      .then(response => {
        setState({ error: undefined, response, isLoading: false });
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled by cleanup', error.message);
        } else {
          setState({ error, response: undefined, isLoading: false });
        }
      });

    return () => {
      source.cancel('useEffect cleanup.');
    };
  }, [url, configHash]);

  const { response, error, isLoading } = state;

  function setData(newData) {
    // Used to update state from component
    const newResponse = { ...response, data: newData };
    setState({ ...state, response: newResponse });
  }
  const data = response ? response.data : undefined;
  return { data, response, error, isLoading, setData };
}

export default useAPI;
