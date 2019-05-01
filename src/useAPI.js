import { useEffect, useState } from 'react';
import axios from 'axios';
import hash from 'hash-object';

/**
 * The object returned by the useAPI hook.
 * @typedef {Object} useAPIOutput
 * @property {Object|undefined} data - The data attribute from the axios response.
 * @property {Object|undefined} response - The axios response.
 * @property {Object|undefined} error - The axios error object is an error occurs.
 * @property {boolean} isLoading - Indicates if their is a pending API call.
 * @property {function(object[]): void} setData - Update the response data object.
 */

/**
 * React hook used to make a an API call using axios.
 *
 * Allows you to pass an axios config object, for complete control of the request being sent.
 *
 * @param {string} url - URL that the API call is made to.
 * @param {Object} config - Axios config object passed to the axios.request method.
 * @returns {useAPIOutput} output
 */
function useAPI(url, config = {}) {
  const [state, setState] = useState({
    response: undefined,
    error: undefined,
    isLoading: true
  });

  function updateState(stateUpdate) {
    setState({ ...state, ...stateUpdate });
  }

  const configHash = hash(config);

  useEffect(() => {
    updateState({ isLoading: true });
    axios(url, config)
      .then(response => {
        updateState({ error: undefined, response, isLoading: false });
      })
      .catch(error => {
        updateState({ error, response: undefined, isLoading: false });
      });
  }, [url, configHash]);

  function setData(newData) {
    // Used to update state from component
    const newResponse = { ...response, data: newData };
    setState({ ...state, response: newResponse });
  }

  const { response, error, isLoading } = state;
  const data = response ? response.data : undefined;
  return { data, response, error, isLoading, setData };
}

export default useAPI;
