import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppLayout from "../components/AppLayout";
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers';

const Balzzak = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>발짝</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.5/antd.compact.css"/>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </Provider>
    )
}

Balzzak.prototypes = {
    Component: PropTypes.elementType, // myComponent
    store: PropTypes.object
}

// 발짝에 store을 넣어주는 higher order component.
export default withRedux((initialState, options) => {
    const store = createStore(reducer, initialState);
    return store;
})(Balzzak);
