import React, { useState, useEffect } from 'react';
import 'spectre.css/dist/spectre-exp.css';
import APIComponentWrapper from './APIComponentWrapper';

const NoResults = () => (
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
        <h3>No Results</h3>
      </div>
      <div style={{ flexGrow: 1 }} />
    </div>
  </APIComponentWrapper>
);

export default NoResults;
