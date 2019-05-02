import React from 'react';
import ReactMarkdown from 'react-markdown';
import BasicExampleSource from '!!raw-loader!../../examples/BasicExample';
import BasicExample from '../../examples/BasicExample';
import ExampleComponent from '../../components/ExampleComponent';
import BaseLayout from '../../components/layout/BaseLayout';

const description = `
# Basic Example

Basic usage of the \`useAPI\` hook to fetch a list of books from the Google Books API.

The \`data\` property provides the API response if the API request is successful.

The \`isLoading\` and \`error\` properties can be used to indicate the request status to the user.
`;

const Basic = props => {
  return (
    <BaseLayout>
      <ReactMarkdown source={description} />
      <ExampleComponent Component={BasicExample} componentSource={BasicExampleSource} />
    </BaseLayout>
  );
};

Basic.propTypes = {};

export default Basic;
