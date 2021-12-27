import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `

            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());
            gtag('set', {cookie_flags: 'SameSite=None;Secure'});
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {

              page_path: window.location.pathname,

            });

          `,
            }}
          />
          <meta
            name="description"
            content="MicroForge, uma industria brasileira voltada para facilitar a vida dos cientistas e resgatar o encanto pela ciencia por toda a sociedade"
          />
          <meta
            name="keywords"
            content="ciência, beads magnéticas, microforge, venda consultiva, produtos, insumos, facilidade, uforge, micro-forge"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Portuguese" />
          <meta name="author" content="Mateus B Fiamenghi" />
          <link rel="icon" href="/logo_microForge.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
          />
        </Head>

        <body>
          <div className="bodyWrapper">
            <Main />

            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
