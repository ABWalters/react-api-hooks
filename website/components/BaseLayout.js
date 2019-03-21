import React from 'react';
import PropTypes from 'prop-types';
import 'spectre.css';
import styled, { createGlobalStyle } from 'styled-components';

const OuterWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 50px;
  height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f8f8;
  }
  
  body, html, #__next{
    height: 100%;
  }
  
  pre[class*="language-"]{
    border: 1px solid #eee;
    padding: 10px 15px;
    font-size: 13px;
  }
`;

const BodyWrapper = styled.div`
  // border: 1px solid #eee;
  margin-top: 10px;
  margin-bottom: 40px;
  border-radius: 4px;
  overflow: hidden;
  padding: 10px 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #fff;
`;

const bodyInnerWrapper = styled.div``;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const NavbarWrapper = styled.div`
  background-color: #2e4052;
  color: #fff;
  padding: 10px 0;

  a {
    color: #dff8eb;
  }

  .btn.btn-link {
    color: #00a9a5;
  }
`;

const FooterWrapper = styled.div`
  background-color: #0b5351;
`;

const Navbar = () => (
  <NavbarWrapper>
    <header className="navbar">
      <Container>
        <section className="navbar-section">
          <a href="/" className="navbar-brand mr-2">
            React API Hooks
          </a>
          <a href="" className="btn btn-link">
            Examples
          </a>
          <a href="" className="btn btn-link">
            Usage
          </a>
          <a href="" className="btn btn-link">
            Reference
          </a>
        </section>
      </Container>
    </header>
  </NavbarWrapper>
);

const BaseLayout = ({ children }) => {
  return (
    <OuterWrapper>
      <Navbar />
      <Container>
        <BodyWrapper>
          <GlobalStyle />
          {children}
        </BodyWrapper>
      </Container>
      <FooterWrapper>I are footer!</FooterWrapper>
    </OuterWrapper>
  );
};

BaseLayout.propTypes = {};

export default BaseLayout;
