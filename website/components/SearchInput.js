import React from 'react';

export const SearchInput = ({ onChange, defaultValue }) => {
  return (
    <div className="form-group" style={{ marginBottom: 7 }}>
      <input className="form-input" type="text" onChange={onChange}
             defaultValue={defaultValue} />
    </div>
  );
};
