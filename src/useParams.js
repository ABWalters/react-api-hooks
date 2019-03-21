import { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

export default function useParams(initialParams = {}, debounceDelay=500) {
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
