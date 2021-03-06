import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/flaticon.css';
import '../public/css/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
// import '../public/css/rtl.css';
import '../public/css/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Loader from '../components/Shared/Loader'; 
import GoTop from '../components/Shared/GoTop';

/* export function reportWebVitals({ id, name, label, value }) {
    // Use `window.gtag` if you initialized Google Analytics as this example:
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
    window.gtag('event', name, {
      event_category:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    })
  } */
  

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="Somos una empresa nacional, 
                                                        entendemos el problema de las plagas en Chile 
                                                        desde nuestra realidad local."
                                                        />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:image" content="https://emexplagas.cl/emex_tw.png" />
                    <meta name="twitter:site" content="https://emexplagas.cl/" />
                    <meta name="twitter:title" content="EMEX - Control de Plagas" />
                    <meta name="twitter:description" content="Una empresa nacional, 
                                                        entendemos el problema de las plagas en Chile." />
                    <meta property="og:url" content="https://emexplagas.cl/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="EMEX - Control de Plagas" />
                    <meta property="og:description" content="Una empresa nacional, 
                                                        entendemos el problema de las plagas en Chile." />
                    <meta property="og:image" content="https://emexplagas.cl/emex_og.png" />
                    {/* <title>EMEX - Control de Plagas</title> */}
                    <link rel="alternate" hreflang="es" href="http://emexplagas.cl/" />
                    <meta http-equiv="Content-Language" content="es" />
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="10.50" />
            </React.Fragment>
        );
    }
}

