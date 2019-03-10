import React from 'react';
import ComponentExample from '../components/ComponentExample';
import simpleAPIExampleSource from '../examples/simpleAPIExampleSource';
import SimpleAPIExample from '../examples/SimpleAPIExample';
import filteredAPIExample from '../examples/filteredAPIExampleSource.js';
import FilteredAPIExample from '../examples/FilteredAPIExample';
import BaseLayout from '../layout/BaseLayout';

const DemoView = () => {
  return (
    <div>
      <ComponentExample
        description="Simple API call."
        componentSource={simpleAPIExampleSource}
        component={SimpleAPIExample}
        title="Simple API"
      />
      <hr className="example-separator" />
      <ComponentExample
        description="API call with filtering and pagination."
        componentSource={filteredAPIExample}
        component={FilteredAPIExample}
        title="Filtered API"
      />
    </div>
  );
};

export default DemoView;
