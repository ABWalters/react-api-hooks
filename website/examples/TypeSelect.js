import React from 'react';
import PropTypes from 'prop-types';

const TypeSelect = ({ onChange, ...passProps }) => {
  return (
    <div className="form-group" {...passProps}>
      <select className="form-select" onChange={onChange}>
        <option value=""></option>
        <option value="partial">Partially Viewable</option>
        <option value="full">Completely Viewable</option>
        <option value="free-ebooks">Free EBook</option>
        <option value="paid-ebooks">Paid Ebook</option>
        <option value="ebooks">Any Ebook</option>
      </select>
    </div>
  );
};

TypeSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default TypeSelect;
