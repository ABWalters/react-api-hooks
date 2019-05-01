import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-coy.css';
import ExampleComponent from '../components/ExampleComponent';
import SimpleAPICall from '../examples/SimpleAPICall';
import APIWithPagination from '../examples/APIWithPagination/APIWithPagination';
import SimpleAPICallSource from '!!raw-loader!../examples/SimpleAPICall';
import APIWithPaginationSource from '!!raw-loader!../examples/APIWithPagination/APIWithPagination';
import OffsetPaginationSource from '!!raw-loader!../examples/APIWithPagination/OffsetPagination';
import Tabs from '../components/Tabs';
import APIWithSearch from '../examples/APIWithSearch';
import APIWithSearchSource from '!!raw-loader!../examples/APIWithSearch';

const Index = ({
  url: {
    query: { tabIndex: initialIndex = '0' }
  }
}) => {
  const [tabIndex, setTabIndex] = useState(parseInt(initialIndex));

  function onChange(newTabIndex) {
    setTabIndex(newTabIndex);
    const url = new URL(window.location.href);
    url.searchParams.set('tabIndex', newTabIndex);
    window.location.search = url.search;
  }

  return (
    <BaseLayout>
      <Tabs index={tabIndex} onChange={onChange} />
      {tabIndex === 0 && (
        <ExampleComponent Component={SimpleAPICall} componentSource={SimpleAPICallSource} />
      )}
      {tabIndex === 1 && (
        <>
          <ExampleComponent
            Component={APIWithPagination}
            componentSource={APIWithPaginationSource}
          />
          <ExampleComponent componentSource={OffsetPaginationSource} />
        </>
      )}
      {tabIndex === 2 && (
        <ExampleComponent Component={APIWithSearch} componentSource={APIWithSearchSource} />
      )}
    </BaseLayout>
  );
};

export default Index;
