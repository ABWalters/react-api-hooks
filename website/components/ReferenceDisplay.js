import React from 'react';
import PropTypes from 'prop-types';
import BaseLayout from '../components/layout/BaseLayout';

const ReactMarkdown = require('react-markdown');

const ReferenceDisplay = ({ source }) => {
  return (
    <BaseLayout>
      <h1>Reference</h1>
      <ReactMarkdown escapeHtml={false} source={source} />
    </BaseLayout>
  );
};

ReferenceDisplay.propTypes = {
  source: PropTypes.string.isRequired
};

export default ReferenceDisplay;
