import React from 'react';

export const SearchInput = ({ onChange, defaultValue, ...passProps }) => {
  return (
    <div className="form-group" style={{ marginBottom: 7 }} {...passProps}>
      <input className="form-input" type="text" onChange={onChange}
             defaultValue={defaultValue} />
    </div>
  );
};
