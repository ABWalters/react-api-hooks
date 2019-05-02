import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  max-width: 300px;
  margin: 0 1rem;
`;

const MenuItem = ({ children, href, subTitle }) => {
  return (
    <li className="menu-item">
      <Link scroll={false} href={href}>
        <a>
          {children}
          <br />
          <small style={{ color: '#bcc3ce' }}>{subTitle}</small>
        </a>
      </Link>
    </li>
  );
};

const Menu = () => {
  return (
    <MenuWrapper>
      <ul className="menu" style={{ transform: 'none' }}>
        <li className="divider" data-content="Examples" />
        <MenuItem href="/examples/basic" subTitle="useAPI">
          Basic Example
        </MenuItem>
        <MenuItem href="/examples/pagination" subTitle="useAPI + useParams">
          Pagination Example
        </MenuItem>
        <MenuItem href="/examples/filter" subTitle="useAPI + useParams">
          Filter Example
        </MenuItem>
        <li className="divider" data-content="Reference" />
        <MenuItem href="/reference/use-api">useAPI</MenuItem>
        <MenuItem href="/reference/use-params">useParams</MenuItem>
        <MenuItem href="/reference/use-inf-api">useInfAPI</MenuItem>
      </ul>
    </MenuWrapper>
  );
};

Menu.propTypes = {};

export default Menu;
