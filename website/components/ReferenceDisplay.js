import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseLayout from '../components/layout/BaseLayout';

const ReactMarkdown = require('react-markdown');

const MarkDownWrapper = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
  }

  thead {
    background-color: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
  }

  th {
    border-bottom-width: 0.1rem;
  }

  th,
  td {
    border-bottom: 0.05rem solid #dadee4;
    padding: 0.6rem 0.4rem;
    border-right: 1px solid rgba(0, 0, 0, 0.07);
  }

  th:first-child,
  td:first-child {
    border-left: 1px solid rgba(0, 0, 0, 0.07);
  }
`;

const ReferenceDisplay = ({ source }) => {
  return (
    <BaseLayout>
      <div style={{ padding: '0.4rem 0.6rem' }}>
        <h1>Reference</h1>
        <MarkDownWrapper>
          <ReactMarkdown escapeHtml={false} source={source} />
        </MarkDownWrapper>
      </div>
    </BaseLayout>
  );
};

ReferenceDisplay.propTypes = {
  source: PropTypes.string.isRequired
};

export default ReferenceDisplay;
