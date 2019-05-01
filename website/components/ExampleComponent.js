import React from 'react';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-coy.css';
import { PrismCode } from 'react-prism';

const ExampleComponent = ({ Component, componentSource }) => {
  return (
    <div>
      {Component && <Component />}
      <PrismCode component="pre" className="language-jsx">
        {componentSource}
      </PrismCode>
    </div>
  );
};

export default ExampleComponent;
