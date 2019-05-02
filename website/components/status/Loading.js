import React, { useState, useEffect } from 'react';
import 'spectre.css/dist/spectre-exp.css';
import APIComponentWrapper from '../APIComponentWrapper';

const Loading = () => (
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
        <h3>Loading</h3>
        <progress className="progress" max="100" style={{ maxWidth: 400 }} />
      </div>
      <div style={{ flexGrow: 1 }} />
    </div>
  </APIComponentWrapper>
);

export default Loading;
