// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Head, Main, NextScript } from "next/document";
// import SvgSprite from "../modules/shared/structure/SpriteSvg";
// import {  useState } from "react";

class OwnDocument extends Document<{ lang; lang_code }> {
  static async getInitialProps(ctx) {
    const additionalProps = { lang: null, lang_code: null };
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, ...additionalProps };
  }

  render() {
    return (
      <html lang="fr" className={`own-html`} data-lang="fr_FR">
        <Head>{ /* <title>{title}</title> <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" /> <GTMHead GTMId="GTM-XXXXXX" /> */}</Head>
        <body id="bodySite">
          <main id="mainSections" className="wrapp-all-sections">
            {/* <Main {...this.props} /> */}
            <Main />
          </main>
          <NextScript />
          {/* <SvgSprite /> */}
        </body>
      </html>
    );
  }
}

export default OwnDocument;
