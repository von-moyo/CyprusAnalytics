import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="React Nextjs Template Geekfolio Multi-Purpose themeforest" />
        <meta name="description" content="Geekfolio - Multi-Purpose React.js Next.js Template" />
        <meta name="author" content="" />
        {/* ------ Favicon ------ */}
        <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
        {/* ------ Google Fonts ------ */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        {/* ------ bootstrap icons cdn ------ */}
        {/* ------ Plugins ------ */}
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        {/* ------ Core Style Css ------ */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
