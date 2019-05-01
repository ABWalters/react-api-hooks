import React from 'react';
import ExampleComponent from '../../components/ExampleComponent';
import BaseLayout from '../../components/layout/BaseLayout';
import APIWithPagination
  from '../../examples/PaginationExample/PaginationExample';
import APIWithPaginationSource
  from '!!raw-loader!../../examples/PaginationExample/PaginationExample';
import OffsetPaginationSource
  from '!!raw-loader!../../examples/PaginationExample/OffsetPagination';

const Pagination = props => {
  return (
    <BaseLayout>
      <>
        <ExampleComponent
          Component={APIWithPagination}
          componentSource={APIWithPaginationSource}
        />
        <ExampleComponent componentSource={OffsetPaginationSource} />
      </>
    </BaseLayout>
  );
};

Pagination.propTypes = {};

export default Pagination;
