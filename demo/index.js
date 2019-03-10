import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './layout/BaseLayout';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism.css';

// import hljs from 'highlight.js/lib/highlight';
// import 'highlight.js/styles/github.css';
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);
// hljs.initHighlightingOnLoad();

import './style.css';
import TabbedWindow from './layout/TabbedWindow';
import DemoView from './views/DemoView';
import UsageView from './views/UsageView';
import ReferenceView from './views/ReferenceView';

const App = () => {
  return (
    <div>
      <BaseLayout>
        <h1 className="title-main">React API Hooks</h1>
        <p className="description-main">
          React hooks for fetching and filtering data from API endpoints.
        </p>
        <TabbedWindow tabNames={['Demo', 'Usage', 'Reference']}>
          <DemoView />
          <UsageView />
          <ReferenceView />
        </TabbedWindow>
      </BaseLayout>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('react-root'));
