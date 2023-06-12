import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link rel="icon" href="/Icon.jpg" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-651DVH2RPJ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-651DVH2RPJ');
              `,
          }}
        />

        <Script
          id="zsiqchat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                var $zoho=$zoho || {};
                $zoho.salesiq = $zoho.salesiq || {widgetcode: "c3dcc1fcfee2b66fc9d783aaa40847542159b0f111881b14a9e31924f74c1b42", values:{},ready:function(){}};
                var d=document;
                s=d.createElement("script");
                s.type="text/javascript";s.id="zsiqscript";s.defer=true;
                s.src="https://salesiq.zoho.com/widget";
                t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
               `,
          }}
        />
      </Head>
      <body
        style={{ width: "100vw", position: "absolute", overflowX: "hidden" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
