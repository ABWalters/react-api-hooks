import React from 'react';
import { useAPI } from 'react-api-hooks';
import GoogleBooksList from '../components/GoogleBooksList';
import { booksInitialParams, booksURL } from '../constants';
import { Loading, Error } from '../components/Status';

const SimpleAPICall = () => {
  const { data = [], error, isLoading } = useAPI(booksURL, { params: booksInitialParams });

  if (error) {
    return <Error error={error} />;
  }

  return isLoading ? <Loading /> : <GoogleBooksList data={data} />;
};

export default SimpleAPICall;
