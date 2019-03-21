import React from 'react';
import { useAPI, useParams } from 'react-api-hooks';
import { Error, Loading } from '../components/Status';
import GoogleBooksList from '../components/GoogleBooksList';
import { booksInitialParams, booksURL } from '../constants';
import { SearchInput } from '../components/SearchInput';

const APIWithPagination = () => {
  const { params, debouncedUpdateParams, isStale } = useParams(booksInitialParams);
  const { data = [], error, isLoading } = useAPI(booksURL, { params });

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <SearchInput
        onChange={e =>
          debouncedUpdateParams({
            q: `intitle:${e.target.value.toLowerCase()}`
          })
        }
        defaultValue="react"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <GoogleBooksList style={{ opacity: isStale ? 0.3 : 1.0 }} data={data} />
      )}
    </>
  );
};

export default APIWithPagination;
