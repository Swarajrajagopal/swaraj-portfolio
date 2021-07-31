import Head from "next/head";
import React, { useEffect } from "react";
import Work from "./work";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/work");
  });
  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z9JB64XJPS"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-Z9JB64XJPS');
        </script>`
          }}
        />
        <title>Swaraj Rajagopal</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Source+Sans+Pro:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Roboto-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Roboto-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Roboto-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <meta name="description" content="Swaraj Rajagopal" />
        <meta name="og:title" content="Swaraj Rajagopal" />
      </Head>
    </div>
  );
}
