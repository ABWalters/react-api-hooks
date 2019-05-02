import React from 'react';
import { useAPI } from 'react-api-hooks';
import GoogleBooksList from '../components/GoogleBooksList';
import { booksInitialParams, booksURL } from '../constants';
import Error from '../components/status/Error';
import Loading from '../components/status/Loading';

const BasicExample = () => {
  const { data = [], error, isLoading } = useAPI(booksURL, { params: booksInitialParams });

  if (error) {
    return <Error error={error} />;
  }

  return isLoading ? <Loading /> : <GoogleBooksList data={data} />;
};

export default BasicExample;
