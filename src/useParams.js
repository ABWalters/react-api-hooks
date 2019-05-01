import { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

/**
 * The object returned by the useParams hook.
 * @typedef {Object} useParamsOutput
 * @property {Object} params - The current params to be used when making an API call.
 * @property {boolean} isStale - Is their a debounced params update waiting to timeout. (Are we waiting for the user to stop typing)
 * @property {function(newParams): void} setParams - Function used to set new parameters
 */

/**
 * React hook to keep query parameters in state, that can be used for the API calls.
 *
 * Includes the ability the debounce an update, which is useful for delaying API calls while the user is typing.
 *
 * @param {Object} initialParams - The initial parameters to keep in states
 * @param {number} debounceDelay=500 - The time to debounce the params update when calling debouncedUpdateParams
 * @returns {useParamsOutput} output
 */
function useParams(initialParams = {}, debounceDelay = 500) {
  const [params, setParams] = useState(initialParams);
  const [isStale, setIsStale] = useState(false);

  function updateParams(updatedParams) {
    const newParams = { ...params, ...updatedParams };
    setParams(newParams);
  }

  const debouncedSetParams = useMemo(
    () =>
      debounce(newParams => {
        setIsStale(false);
        setParams(newParams);
      }, debounceDelay),
    []
  );

  return {
    params,
    isStale,
    setParams,
    debouncedSetParams: newParams => {
      setIsStale(true);
      debouncedSetParams(newParams);
    },
    updateParams,
    debouncedUpdateParams: updatedParams => {
      setIsStale(true);
      debouncedSetParams({ ...params, ...updatedParams });
    }
  };
}

export default useParams;
