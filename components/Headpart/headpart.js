import React from 'react';
import Head from 'next/head';

const Headpart = ({ pagetitle = 'Welcome to our first application' }) => {
  return (
    <Head>
        <title>{pagetitle}</title>
        <meta property='og:title' content='My page title' key='title' />
        <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default Headpart;