import React from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import PropTypes from 'prop-types';

const Balzzak = ({ Component }) => {
    return (
        <>
            <Head>
                <title>발짝</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.5/antd.compact.css"/>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </>
    )
}

Balzzak.prototypes = {
    Component: PropTypes.elementType, // myComponent
}

export default Balzzak;
