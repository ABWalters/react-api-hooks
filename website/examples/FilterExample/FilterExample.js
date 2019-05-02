import React from 'react';
import { useAPI, useParams } from 'react-api-hooks';
import GoogleBooksList from '../components/GoogleBooksList';
import { booksInitialParams, booksURL } from '../constants';
import { SearchInput } from '../components/SearchInput';
import TypeSelect from './TypeSelect';
import Error from '../../components/status/Error';
import Loading from '../../components/status/Loading';

const FilterExample = () => {
  const { params, updateParams, debouncedUpdateParams, isStale } = useParams(
    booksInitialParams);
  const { data = [], error, isLoading } = useAPI(booksURL, { params });

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <SearchInput
          style={{ flexGrow: 2, flexBasis: 0 }}
          onChange={e =>
            debouncedUpdateParams({
              q: `intitle:${e.target.value.toLowerCase()}`
            })
          }
          defaultValue="react"
        />
        <TypeSelect style={{ flexGrow: 1, flexBasis: 0 }} onChange={e =>
          updateParams({
            filter: e.target.value ? e.target.value : undefined
          })
        } />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <GoogleBooksList style={{ opacity: isStale ? 0.3 : 1.0 }} data={data} />
      )}
    </>
  );
};

export default FilterExample;
