import Document, { Html, Head, Main, NextScript } from 'next/document'
import request from '../lib/request'
class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const originalRenderPage = ctx.renderPage

  //   // Run the React rendering logic synchronously
  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       // Useful for wrapping the whole react tree
  //       enhanceApp: (App) => App,
  //       // Useful for wrapping in a per-page basis
  //       enhanceComponent: (Component) => Component,
  //     })

  //   // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  //   const initialProps = await Document.getInitialProps(ctx)
  //   const res = await fetch(`${process.env.REST_URL}/user/ping`)
  //   const ping = await res.json()
  //   initialProps["ping"] = ping
  //   return initialProps
  // }

  render() {
    // const { ping } = this.props
    // console.log('====================================');
    // console.log("ping",ping);
    // console.log('====================================');
    return (
      <Html className={``} >
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link rel="preload" href="fonts/EuclidCircularA-Regular-WebS-0e048bbb.woff" as="font" type="font/woff" crossOrigin="anonymous" />
          <link rel="preload" href="fonts/EuclidCircularA-Regular-WebS-9cf5f4fa.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="fonts/EuclidCircularA-Medium-WebS-7f6405f4.woff" as="font" type="font/woff" crossOrigin="anonymous" />
          <link rel="preload" href="fonts/EuclidCircularA-Medium-WebS-bf58c9f0.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </Head>
        <body className="bg-white text-slate-500" >
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
