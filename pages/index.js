import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return(
        <>
            <Head>
                <title>발짝</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.5/antd.compact.css" />
            </Head>
            <AppLayout>
                <div>
                    <h1>
                        hello, next.js
                    </h1>
                </div>
            </AppLayout>
        </>
    )
}

export default Home;
