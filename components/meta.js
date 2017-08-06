import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='shortcut icon' href='/static/favicon.ico' />
      {/* <link
        rel='stylesheet'
        type='text/css'
        href='//fonts.googleapis.com/css?family=Open+Sans:400,300,700'
      /> */}
      <link
        rel='stylesheet'
        type='text/css'
        href='//fonts.googleapis.com/css?family=Average+Sans:400|Rancho:400|Source+Sans+Pro:400,400italic,700normal,700italic'
      />

    </Head>
    <style jsx global>{`
      body {
        {/* font-family: Georgia, Cambria, 'Times New Roman', Times, serif; */}
        font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
        font-size: 16px;
        padding: 40px 10px;
        margin: 0;
        line-height: 1.5em;
        {/* font-weight: 100; */}
        background-color: white;
      }
      * {
        box-sizing: border-box;
      }

      h1 {
        font-weight: normal;
        line-height: 1.25em;
      }

      a {
        color: #6b3912;
      }

      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #000000;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #000000, 0 0 5px #000000;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
)