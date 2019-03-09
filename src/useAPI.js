import { useEffect, useState } from 'react';
import axios from 'axios';
import hash from 'hash-object';

/**
 * @param {string} url - URL that the API call is made to.
 * @param {object} config - Axios config object passed to the axios.request method.
 */
function useAPI(url, config={}) {
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

  const { response, error, isLoading } = state;
  const data = response ? response.data : undefined;
  return { data, response, error, isLoading };
}

export default useAPI;
