import React from 'react';
import PropTypes from 'prop-types';
import { PrismCode } from 'react-prism';

const h3Style = { marginBottom: 20 };

const ComponentExample = ({ title, description, component, componentSource }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p style={{ color: '#6b6b6b' }}>{description}</p>
      {component()}
      <hr style={{ width: 200, margin: '20 auto' }} />
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
