import React from 'react';
import ExampleComponent from '../../components/ExampleComponent';
import BaseLayout from '../../components/layout/BaseLayout';
import APIWithSearch from '../../examples/FilterExample';
import APIWithSearchSource from '!!raw-loader!../../examples/FilterExample';

const Pagination = props => {
  return (
    <BaseLayout>
      <ExampleComponent Component={APIWithSearch} componentSource={APIWithSearchSource} />
    </BaseLayout>
  );
};

Pagination.propTypes = {};

export default Pagination;
