import React from 'react';
import GithubCorner from 'react-github-corner';
import '../../node_modules/spectre.css/dist/spectre.css';
import styled, { createGlobalStyle } from 'styled-components';
import Menu from './Menu';
import Grid from './Grid';

const OuterWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100%;
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f8f8;
  }
  
  body, html, #__next{
    min-height: 100%;
  }
  
  pre[class*="language-"]{
    border: 1px solid #eee;
    padding: 10px 15px;
    font-size: 13px;
  }
`;

const BodyWrapper = styled.div`
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
    color: #fff;
  }

  .btn.btn-link {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const FooterWrapper = styled.div`
  background-color: #0b5351;
`;

const HeroWrapper = styled.div`
  // background-color: #0b5351;
  // background-color: #0093e9;
  // background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  background: #4b6cb7; /* fallback for old browsers */
  background: linear-gradient(
    to right,
    #182848,
    #4b6cb7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  text-align: center;
  color: #dff8eb;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 0.6rem;

  .hero {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`;

const Tag = ({ children }) => {
  return (
    <span
      className="label"
      style={{
        margin: '0 .4rem',
        padding: '.2rem .4rem',
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      {children}
    </span>
  );
};

const MenuLayoutWrapper = styled.div`
  max-width: 10rem;
  position: absolute;
`;

const BaseLayout = ({ children }) => {
  return (
    <OuterWrapper>
      <HeroWrapper>
        <GithubCorner href="https://github.com/ABWalters/react-api-hooks" />
        <div className="hero">
          <div className="hero-body">
            <h1>React API Hooks</h1>
            <p>React hooks to interact with an API from a stateless component.</p>
            <code style={{ padding: '8px 15px' }}>npm i react-api-hooks -s</code>
            <div style={{ marginTop: '1.4rem' }}>
              <Tag>react</Tag>
              <Tag>hooks</Tag>
              <Tag>API</Tag>
              <Tag>axios</Tag>
              <Tag>stateless</Tag>
            </div>
          </div>
        </div>
      </HeroWrapper>

      <br />

      <Grid>
        <Menu />
        <Container>
          <BodyWrapper>
            <GlobalStyle />
            {children}
          </BodyWrapper>
        </Container>
      </Grid>
    </OuterWrapper>
  );
};

BaseLayout.propTypes = {};

export default BaseLayout;
