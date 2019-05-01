import React from 'react';
import { useAPI, useParams } from 'react-api-hooks';
import { Error, Loading } from '../../components/Status';
import GoogleBooksList from '../../components/GoogleBooksList';
import Paginator from '../../components/Paginator';
import { booksInitialParams, booksURL } from '../../constants';
import OffsetPagination from './OffsetPagination';

const APIWithPagination = () => {
  const { params, updateParams } = useParams(booksInitialParams);
  const { data = [], error, isLoading } = useAPI(booksURL, { params });
  const pagination = new OffsetPagination(data.items || [], params, updateParams, 5);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      {isLoading ? <Loading /> : <GoogleBooksList data={data} />}
      <Paginator
        hasNext={pagination.hasNextPage()}
        hasPrevious={pagination.hasPreviousPage()}
        pageCnt={pagination.getPageCnt()}
        onNext={pagination.onNext}
        onPrevious={pagination.onPrevious}
      />
    </>
  );
};

export default APIWithPagination;