import React from 'react';
import { useInfAPI } from 'react-api-hooks';
import InfiniteScroll from 'react-infinite-scroller';
import { GoogleBooksListInner } from '../../components/GoogleBooksList';
import Error from '../../components/status/Error';
import Loading from '../../components/status/Loading';
import { booksInitialParams, booksURL } from '../../constants';
import { paginator, responseToItems } from './functions';

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
        loader={<Loading />}
        useWindow={false}
      >
        <GoogleBooksListInner items={items} />
      </InfiniteScroll>
    </div>
  );
};

InfScrollExample.propTypes = {};

export default InfScrollExample;
