import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ defaultValue, onChange }) => {
  return (
    <input type="text" className="u-full-width" defaultValue={defaultValue} onChange={onChange} />
  );
};

SearchInput.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchInput;
