import React from 'react';
import ReactMarkdown from 'react-markdown';
import ExampleComponent from '../../components/ExampleComponent';
import BaseLayout from '../../components/layout/BaseLayout';
import APIWithPagination from '../../examples/PaginationExample/PaginationExample';
import APIWithPaginationSource from '!!raw-loader!../../examples/PaginationExample/PaginationExample';
import OffsetPaginationSource from '!!raw-loader!../../examples/PaginationExample/OffsetPagination';

const description = `
# Pagination Example

An example showing how the \`useParams\` and \`useAPI\` hooks can be used together to paginate results from an API.

The \`useParams\` hook keeps a params object in it's state, that can be used when making calls to the API.

The API uses offset pagination, by updating the \`startIndex\` param, the component can paginate through the results.
`;

const Pagination = props => {
  return (
    <BaseLayout>
      <>
        <ReactMarkdown source={description} />
        <ExampleComponent Component={APIWithPagination} componentSource={APIWithPaginationSource} />
        <ExampleComponent componentSource={OffsetPaginationSource} />
      </>
    </BaseLayout>
  );
};

Pagination.propTypes = {};

export default Pagination;
