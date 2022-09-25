import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head>
                <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

                <Script strategy="lazyOnload" id={"google-analytics-script"}>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
                </Script>

                <meta charSet="UTF-8" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}