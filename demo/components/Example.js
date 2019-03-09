import React from 'react';
import PropTypes from 'prop-types';
import { PrismCode } from 'react-prism';

const h3Style = { marginBottom: 20 };

const ComponentExample = ({ title, description, component, componentSource }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p style={{ color: '#6b6b6b' }}>{description}</p>
      <h3 style={h3Style}>Component Example</h3>
      {component()}
      <hr style={{ width: 200, margin: '20 auto' }} />
      <h3 style={h3Style}>Component Code</h3>
      <pre>
        <PrismCode className="language-jsx">{componentSource}</PrismCode>
      </pre>
    </div>
  );
};

ComponentExample.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  componentSource: PropTypes.string.isRequired
};

export default ComponentExample;
