import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TabbedWindow = ({ tabNames, children }) => {
  const hashTabIndex = window.location.hash.match(/tab-index-([0-9])/i);
  const initTabIndex = hashTabIndex ? parseInt(hashTabIndex[1]) : 0;
  const [tabIndex, setTabIndex] = useState(initTabIndex);

  const renderedChild = tabIndex < children.length ? children[tabIndex] : undefined;

  return (
    <div>
      <div className="tab-control">
        {tabNames.map((tabName, index) => {
          return (
            <div
              key={tabName}
              className={`tab-control-item ${index === tabIndex ? 'active' : ''}`}
              onClick={() => {
                setTabIndex(index);
                window.location.hash = `tab-index-${index}`;
              }}
            >
              {tabName}
            </div>
          );
        })}
      </div>
      <div>{renderedChild}</div>
    </div>
  );
};

TabbedWindow.propTypes = {
  tabNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TabbedWindow;
