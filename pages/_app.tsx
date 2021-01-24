import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';

const Balzzak = ({ Component, store }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <Head>
      <title>발짝</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.5/antd.compact.css" />
    </Head>
    <AppLayout>
      <Component />
    </AppLayout>
  </Provider>
);

Balzzak.prototypes = {
  Component: PropTypes.elementType.isRequired, // myComponent
  store: PropTypes.object.isRequired,
};

const sagaMiddleware = createSagaMiddleware();

// 발짝에 store을 넣어주는 higher order component.
export default withRedux((initialState, options) => {
  const middleware = [sagaMiddleware];
  const enhancer = compose(applyMiddleware(...middleware)) // 여러개의 미들웨어를 합성

  const store = createStore(reducer, initialState, enhancer); // store만들때 적용
  sagaMiddleware.run(rootSaga);
  return store;
})(Balzzak);
