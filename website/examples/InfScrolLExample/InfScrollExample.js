import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfAPI } from 'react-api-hooks';
import { booksInitialParams, booksURL } from '../../constants';
import { GoogleBooksListInner } from '../../components/GoogleBooksList';
import { paginator, responseToItems } from './functions';
import Error from '../../components/status/Error';

const InfScrollExample = () => {
  const { items, error, isPaging, hasMore, fetchPage } = useInfAPI(
    booksURL,
    { params: booksInitialParams },
    paginator,
    responseToItems
  );

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div style={{ overflow: 'auto', height: 400, border: '1px solid #eee' }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {
          if (!isPaging) {
            fetchPage();
          }
        }}
        hasMore={hasMore}
        loader={<div key={0}>Loading</div>}
        useWindow={false}
      >
        <GoogleBooksListInner items={items} />
      </InfiniteScroll>
    </div>
  );
};

InfScrollExample.propTypes = {};

export default InfScrollExample;
