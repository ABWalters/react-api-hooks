import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  max-width: 200px;
  margin: 1rem 1rem;
`;

const urlPrefix = process.env.NODE_ENV === 'production'
  ? '/react-api-hooks'
  : '';

const MenuItem = ({ children, href }) => {
  return (
    <li className="menu-item">
      <Link scroll={false} href={urlPrefix + href}>
        <a>
          {children}
        </a>
      </Link>
    </li>
  );
};

const Menu = props => {
  return (
    <MenuWrapper>
      <ul className="menu">
        <li className="divider" data-content="Examples">
        </li>
        <MenuItem href="/examples/basic">
          Basic Example
        </MenuItem>
        <MenuItem href="/examples/pagination">
          Pagination Example
        </MenuItem>
        <MenuItem href="/examples/filter">
          Filter Example
        </MenuItem>
        <li className="divider" data-content="Reference">
        </li>
        <MenuItem href="/reference/use-api">
          useAPI
        </MenuItem>
        <MenuItem href="/reference/use-params">
          useParams
        </MenuItem>
        <MenuItem href="/reference/use-inf-api">
          useInfAPI
        </MenuItem>
      </ul>
    </MenuWrapper>
  );
};

Menu.propTypes = {};

export default Menu;
