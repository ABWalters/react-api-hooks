import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './layout/BaseLayout';
import BasicUsageExample from './examples/BasicUsageExample';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism.css';

import ComponentExample from './components/Example';
import AdvancedUsageExample from './examples/AdvancedExample';
import './style.css';
import basicExampleSource from './examples/basicExampleSource';
import advancedExampleSource from './examples/advancedExampleSource';

const App = () => {
  return (
    <BaseLayout>
      <ComponentExample
        description="Basic usage of useAPI hook."
        componentSource={basicExampleSource}
        component={BasicUsageExample}
        title="Basic Usage"
      />
      <hr className="example-separator" />
      <ComponentExample
        description="Advanced usage of useAPI together with useParams hook."
        componentSource={advancedExampleSource}
        component={AdvancedUsageExample}
        title="Advanced Usage"
      />
    </BaseLayout>
  );
};

ReactDOM.render(<App />, document.getElementById('react-root'));
