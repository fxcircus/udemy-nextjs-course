// import 'roy/styles/globals.css'

import { Fragment } from "react";
import MainHeader from "roy/components/layout/MainHeaders";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <MainHeader />
      <Component {...pageProps} />
    </Fragment>
  )
}
