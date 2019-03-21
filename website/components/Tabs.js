import React from 'react';

const Tabs = ({ index, onChange }) => {
  return (
    <div>
      <ul className="tab tab-block">
        <li className="tab-item" onClick={() => onChange(0)}>
          <a href="#" className={index === 0 ? 'active' : ''}>
            Simple API Call
          </a>
        </li>
        <li className="tab-item" onClick={() => onChange(1)}>
          <a href="#" className={index === 1 ? 'active' : ''}>
            API With Pagination
          </a>
        </li>
        <li className="tab-item" onClick={() => onChange(2)}>
          <a href="#" className={index === 2 ? 'active' : ''}>
            API With Search
          </a>
        </li>
        <li className="tab-item" onClick={() => onChange(3)}>
          <a href="#" className={index === 3 ? 'active' : ''}>
            API With Filters
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
