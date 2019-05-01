import styled from 'styled-components';
import React from 'react';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "menu content blank";
  
  > :nth-child(2) {
    width: 100vw;
    max-width: 900px;
  }
  
  .menu{
    grid-area: menu;
  }
  
  .content{
    grid-area: content;
  }
`;

const Grid = ({ children }) => {
  return (
    <GridWrapper>
      {children}
    </GridWrapper>
  );
};

Grid.propTypes = {};

export default Grid;
