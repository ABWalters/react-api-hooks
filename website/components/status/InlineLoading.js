import React from 'react';
import 'spectre.css/dist/spectre-exp.css';

const InlineLoading = () => (
  <div style={{ textAlign: 'center' }}>
    <h3>Loading</h3>
    <progress className="progress" max="100" style={{ maxWidth: 400 }} />
  </div>
);

export default InlineLoading;
