import React from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  margin: 20px auto;
  max-width: 1000px;
  background-color: #fff;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  padding: 15px 25px;
`;

const BaseLayout = ({ children }) => {
  return (
    <div>
      <BodyWrapper>{children}</BodyWrapper>
    </div>
  );
};

export default BaseLayout;
