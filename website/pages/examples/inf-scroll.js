import React from 'react';
import ReactMarkdown from 'react-markdown';
import ExampleComponent from '../../components/ExampleComponent';
import BaseLayout from '../../components/layout/BaseLayout';
import InfScrollExample from '../../examples/InfScrolLExample/InfScrollExample';
import InfScrollExampleSource from '!!raw-loader!../../examples/InfScrolLExample/InfScrollExample';
import InfScrollFunctionSource from '!!raw-loader!../../examples/InfScrolLExample/functions';

const description = `
# Infinite Scroll Example

Basic usage of the \`useInfAPI\` hook to scroll through a list of books from the Google Books API.

Use the \`react-infinite-scroller\` component to track scrolling, and call \`fetchPage\` when required.

By default the hook expects the API to paginate using a parameter called \`offset\` and that the API returns an array of items.

If these defaults do not work for your API, then you will need to provide your own \`paginator\` and \`responseToItems\` functions.
`;

const InfScroll = () => {
  return (
    <BaseLayout>
      <>
        <ReactMarkdown source={description} />
        <ExampleComponent Component={InfScrollExample} componentSource={InfScrollExampleSource} />
        <ExampleComponent componentSource={InfScrollFunctionSource} />
      </>
    </BaseLayout>
  );
};

InfScroll.propTypes = {};

export default InfScroll;
