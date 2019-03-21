import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-coy.css';
import ExampleComponent from '../components/ExampleComponent';
import SimpleAPICall from '../examples/SimpleAPICall';
import APIWithPagination from '../examples/APIWithPagination';
import SimpleAPICallSource from '!!raw-loader!../examples/SimpleAPICall';
import APIWithPaginationSource from '!!raw-loader!../examples/APIWithPagination';
import Tabs from '../components/Tabs';

const Index = ({
  url: {
    query: { tabIndex: initialIndex = '0' }
  }
}) => {
  const [tabIndex, setTabIndex] = useState(parseInt(initialIndex));

  function onChange(newTabIndex) {
    setTabIndex(newTabIndex);
    console.log(window.location);
    const url = new URL(window.location.href);
    url.searchParams.set('tabIndex', newTabIndex);
    console.log(url);
    window.location.search = url.search;
  }

  return (
    <BaseLayout>
      <Tabs index={tabIndex} onChange={onChange} />
      <br />
      {tabIndex === 0 && (
        <ExampleComponent Component={SimpleAPICall} componentSource={SimpleAPICallSource} />
      )}
      {tabIndex === 1 && (
        <ExampleComponent Component={APIWithPagination} componentSource={APIWithPaginationSource} />
      )}
    </BaseLayout>
  );
};

export default Index;
