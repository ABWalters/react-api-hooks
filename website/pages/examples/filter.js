import React from 'react';
import ReactMarkdown from 'react-markdown';
import ExampleComponent from '../../components/ExampleComponent';
import BaseLayout from '../../components/layout/BaseLayout';
import APIWithSearch from '../../examples/FilterExample/FilterExample';
import APIWithSearchSource from '!!raw-loader!../../examples/FilterExample/FilterExample';

const description = `
# Filter Example

An example showing how the \`useParams\` and \`useAPI\` hooks can be used together to filter results from an API.

The \`useParams\` hook keeps a params object in it's state, that can be used when making calls to the API.

Use the \`updateParams\` method to immediately update the params object, and trigger a refresh.

Use the \`debouncedUpdateParams\` method to delay the params update until \`wait\` ms have passed between function calls.
([Using the lodash debounce function](https://lodash.com/docs/4.17.11#debounce)).

The \`isStale\` property indicates whether the is a debounced params update pending. 
`;

const Pagination = props => {
  return (
    <BaseLayout>
      <ReactMarkdown source={description} />
      <ExampleComponent Component={APIWithSearch} componentSource={APIWithSearchSource} />
    </BaseLayout>
  );
};

Pagination.propTypes = {};

export default Pagination;
