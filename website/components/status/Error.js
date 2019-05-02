import React from 'react';
import APIComponentWrapper from '../APIComponentWrapper';

const Error = ({ error }) => {
  return (
    <APIComponentWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '0 25px'
        }}
      >
        <div style={{ flexGrow: 1 }} />
        <div style={{ textAlign: 'center' }}>
          <h3>Error</h3>
          <p>An error occurred.</p>
          <small>{error.message || ''}</small>
        </div>
        <div style={{ flexGrow: 1 }} />
      </div>
    </APIComponentWrapper>
  );
};

export default Error;
