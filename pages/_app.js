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
    const middlewares =[];
    const enhancer = compose( // 여러개의 미들웨어를 합성
        applyMiddleware(...middlewares), // 미들웨어들 적용
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f, // 리덕스 devtools 확장 프로그램에서 사용할 수 있는 함수
        )
    const store = createStore(reducer, initialState, enhancer); // store만들때 적용
    return store;
})(Balzzak);
