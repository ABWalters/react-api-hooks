import React from 'react';
import { useAPI, useParams } from 'react-api-hooks';
import { Error, Loading } from '../components/Status';
import GoogleBooksList from '../components/GoogleBooksList';
import Paginator from '../components/Paginator';
import { booksInitialParams, booksURL } from '../constants';

export class OffsetPagination {
  constructor(data, params, updateParams, pageSize) {
    this.data = data;
    this.params = params;
    this.updateParams = updateParams;
    this.pageSize = pageSize;
  }

  onNext = () => this.updateParams({ startIndex: this.getCurrentOffset() + this.pageSize });
  onPrevious = () => this.updateParams({ startIndex: this.getCurrentOffset() - this.pageSize });
  hasPreviousPage = () => this.params.startIndex || 0 > 0;
  hasNextPage = () => this.data.length === this.pageSize;
  getCurrentOffset = () => this.params.startIndex || 0;
  getPageCnt = () => Math.round(this.getCurrentOffset() / this.pageSize) + 1;
}

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
