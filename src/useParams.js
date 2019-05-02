import { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

/**
 * The object returned by the useParams hook.
 * @typedef {Object} useParamsOutput
 * @property {Object} params - The current params to be used when making an API call.
 * @property {boolean} isStale - Is their a debounced params update waiting to timeout. (Are we waiting for the user to stop typing)
 * @property {setParamsFunc} setParams - Function used to set new parameters
 * @property {updateParamsFunc} updateParams - Function used to update current parameters
 * @property {setParamsFunc} debouncedSetParams - Debounced call made to `setParams`
 * @property {updateParamsFunc} debouncedUpdateParams - Debounced call made to `updateParams`
 */

/**
 * `setParams` property of `useParamsOutput`
 * @typedef {function} setParamsFunc
 * @param {Object} newParams - New params object that overwrites the current params.
 */

/**
 * `updateParams` property of `useParamsOutput`
 * @typedef {function} updateParamsFunc
 * @param {Object} paramsUpdate - Partial update to be merged with current params.
 */

/**
 * React hook to keep query parameters in state.
 *
 * Used in conjunction with the other hooks to filter and pagination API calls.
 *
 * Includes the ability the debounce an update, which is useful for delaying API calls while the user is typing.
 *
 * @param {Object} initialParams - The initial parameters to keep in states
 * @param {number} debounceWait=500 - The time to debounce the params update when calling debouncedUpdateParams
 * @returns {useParamsOutput} output
 */
function useParams(initialParams = {}, debounceWait = 500) {
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
      }, debounceWait),
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
