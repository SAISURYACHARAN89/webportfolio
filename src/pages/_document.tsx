import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* External Ionicons stylesheet */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/ionicons@5.5.0/dist/ionicons.css" 
        />
        
        {/* Favicon (ensure it's in public/images/ folder) */}
        <link rel="icon" href="/images/logo.png" />
        
        {/* Default Title */}
        <title>Sai Surya Charan P</title>
        
        {/* Meta Description */}
        <meta name="description" content="Your website description here" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
