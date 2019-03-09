import React from 'react';
import useAPI from '../../src/useAPI';
import BooksList from '../components/BookList';
import { Error, Loading } from '../components/Status';
import { API_URL } from '../constants';
import useParams from '../../src/useParams';
import Paginator from '../components/Paginator';

const pageSize = 5;

const AdvancedUsageExample = () => {
  const { params, updateParams, debouncedUpdateParams, isStale } = useParams({
    q: 'intitle:Guide to the Galaxy',
    startIndex: 0,
    maxResults: pageSize
  });
  const { data, error, isLoading } = useAPI(API_URL, { params });

  if (error) {
    return <Error />;
  }

  const isNext = data ? data.items.length === pageSize : false;
  const isPrev = params.startIndex > 0;

  return (
    <div className="book-list-outer">
      <input
        type="text"
        className="u-full-width"
        defaultValue="Guide to the Galaxy"
        onChange={e => debouncedUpdateParams({ q: `intitle:${e.target.value}`, startIndex: 0 })}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BooksList data={data} isStale={isStale} />
          <Paginator
            isNext={isNext}
            isPrev={isPrev}
            onNext={() => updateParams({ startIndex: params.startIndex + pageSize })}
            onPrev={() => updateParams({ startIndex: params.startIndex - pageSize })}
          />
        </>
      )}
    </div>
  );
};

export default AdvancedUsageExample;
