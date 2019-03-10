import React from 'react';

const statusStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  zIndex: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const Loading = () => {
  return (
    <div style={statusStyle}>
      <h5>Loading...</h5>
    </div>
  );
};

export const Error = () => {
  return <div>An error occurred.</div>;
};
