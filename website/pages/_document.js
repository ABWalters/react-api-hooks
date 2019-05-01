import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const googleAnalyticsInner = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-53236741-7');
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      // Used by Google Analytics
      const isProduction = process.env.NODE_ENV === 'production';

      return {
        ...initialProps,
        isProduction,
        styles: <>{initialProps.styles}{sheet.getStyleElement()}</>
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          {isProduction && (<>
            <script async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-53236741-7" />
            <script dangerouslySetInnerHTML={{__html: googleAnalyticsInner}} />
          </>)}
        </body>
      </Html>
    );
  }
}
