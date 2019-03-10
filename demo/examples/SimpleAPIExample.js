import React from 'react';
import useAPI from '../../src/useAPI';
import BooksList from '../components/BookList';
import { Error, Loading } from '../components/Status';
import { API_URL } from '../constants';

const SimpleAPIExample = () => {
  const { data, error, isLoading } = useAPI(API_URL, {
    params: {
      q: 'intitle:guide to the galaxy',
      maxResults: 5
    }
  });

  if (error) {
    return <Error />;
  }

  return (
    <div className="book-list-outer">{isLoading ? <Loading /> : <BooksList data={data} />}</div>
  );
};

export default SimpleAPIExample;
